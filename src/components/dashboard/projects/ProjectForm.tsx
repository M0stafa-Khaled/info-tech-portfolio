import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import { ADD_PROJECT_FORM_INPUTS } from "../../../constant";
import SelectMenu from "../../../components/ui/SelectMenu";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import { Switch } from "keep-react";
import { z, ZodSchema } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "../../ImageUpload";
import { ImageListType } from "react-images-uploading";
import { IProject } from "../../../interfaces";
import {
  useCreateProject,
  useUpdateProject,
} from "../../../lib/react-query/projects";
import SessionService from "../../../utils/SessionService";
import { toast } from "react-toastify";
import { useGetAllCategories } from "../../../lib/react-query/categories";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface IProps {
  action: "create" | "update";
  project?: IProject;
  projectSchema: ZodSchema;
}

const ProjectForm = ({ action, project, projectSchema }: IProps) => {
  const { id, title, descriptions, tool, url, category, hidden } =
    project || {};
  const token = SessionService.getToken();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const [selected, setSelected] = useState<string | undefined>(
    category?.id ? `${category.id}` : undefined
  );
  const { data: categories } = useGetAllCategories();
  const { mutateAsync: createProject, isPending: isLoadingCreateProject } =
    useCreateProject();
  const { mutateAsync: updateProject, isPending: isLoadingUpdateProject } =
    useUpdateProject();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: title || "",
      descriptions: descriptions || "",
      tool: tool || "",
      url: url || "",
      category: category?.id ? `${category.id}` : "",
      hidden: hidden ? true : false,
      image: [],
    },
  });

  const onChangeFile = (imageList: ImageListType) => {
    const files = imageList
      .map((image) => image.file)
      .filter((file): file is File => file !== undefined);
    setImages(imageList as never[]);
    setValue("image", files);
  };

  const onSubmit = async (dataForm: z.infer<typeof projectSchema>) => {
    // Action update
    if (action === "update")
      try {
        const { data, message } = await updateProject({
          id: `${id}`,
          dataForm: {
            ...dataForm,
            category_id: dataForm.category,
          },
          token: token!,
        });
        if (!data) return toast.error("حدث خطأ أثناء تحديث المشروع");

        toast.success(message);
        reset();
        setImages([]);
        return navigate("/dashboard/admin/projects");
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorResponse = error.response?.data;
          if (typeof errorResponse === "object" && errorResponse !== null) {
            if ("errors" in errorResponse) {
              const errors = errorResponse.errors;
              Object.keys(errors).forEach((key) => {
                if (Array.isArray(errors[key])) {
                  errors[key].forEach((errorMsg: string) => {
                    toast.error(errorMsg);
                  });
                }
              });
            }
          }
        } else {
          toast.error("حدث خطأ أثناء إضافة المشروع");
        }
      }

    // ---- Action create ----
    try {
      const { data, message } = await createProject({
        dataForm: {
          ...dataForm,
          category_id: dataForm.category,
        },
        token: token!,
      });
      if (!data) return toast.error("حدث خطأ أثناء إضافة المشروع");
      toast.success(message);
      reset();
      setImages([]);
      return navigate("/dashboard/admin/projects");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data;
        if (typeof errorResponse === "object" && errorResponse !== null) {
          if ("errors" in errorResponse) {
            const errors = errorResponse.errors;
            Object.keys(errors).forEach((key) => {
              if (Array.isArray(errors[key])) {
                errors[key].forEach((errorMsg: string) => {
                  toast.error(errorMsg);
                });
              }
            });
          }
        }
      } else {
        toast.error("حدث خطأ أثناء إضافة المشروع");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-9 max-w-4xl mx-auto">
      {/* Info */}
      <div className="flex flex-1 justify-center md:justify-start">
        <div className="space-y-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADD_PROJECT_FORM_INPUTS.map((input, idx) => (
              <div key={input.name}>
                <div key={idx} className="relative w-full min-w-[200px] h-11">
                  <Input
                    type={input.type}
                    {...register(
                      input.name as keyof z.infer<
                        typeof projectSchema
                      > as string
                    )}
                  />
                  <Label>{input.label}</Label>
                </div>
                {errors[
                  input.name as keyof z.infer<typeof projectSchema> as string
                ] && (
                  <p className="text-danger text-xs mt-1">
                    {
                      errors[
                        input.name as keyof z.infer<
                          typeof projectSchema
                        > as string
                      ]?.message as string
                    }
                  </p>
                )}
              </div>
            ))}
            {/* Category */}
            <div>
              <div className="flex items-center">
                <span className="text-white w-40">نوع المشروع</span>
                <SelectMenu
                  options={categories?.data || []}
                  label="نوع المشروع"
                  selected={selected as string}
                  setSelected={(value) => {
                    setSelected(value);
                    setValue("category", value);
                  }}
                />
              </div>
              {errors.category?.message && (
                <p className="text-danger text-xs my-1">
                  {errors.category?.message as string}
                </p>
              )}
            </div>
            {/* Show & Hidden */}
            <div className="flex items-center w-full gap-4">
              <span className="text-white">اخفاء المشروع</span>
              <Switch
                dir="ltr"
                onCheckedChange={(checked) => setValue("hidden", checked)}
                defaultChecked={hidden === 1}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="w-full lg:w-fit">
            <Button
              disabled={isLoadingCreateProject}
              type="submit"
              className="rounded-xl w-full md:min-w-56 border-2 border-btn-primary text-blue py-3 hover:bg-btn-primary hover:text-white flex justify-center items-center gap-3"
            >
              {action === "create" ? (
                <>
                  إضافة
                  {isLoadingCreateProject && (
                    <AiOutlineLoading3Quarters
                      className="animate-spin text-white"
                      size={20}
                    />
                  )}
                </>
              ) : (
                <>
                  تحديث
                  {isLoadingUpdateProject && (
                    <AiOutlineLoading3Quarters
                      className="animate-spin text-white"
                      size={20}
                    />
                  )}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Upload Images */}
      <div className="mt-6">
        {action === "update" && <p className="text-muted text-xs">(اختياري)</p>}
        {errors.image?.message && (
          <p className="text-danger text-xs my-1">
            {errors.image?.message as string}
          </p>
        )}
        <ImageUpload onChange={onChangeFile} images={images} multiple />
      </div>
    </form>
  );
};

export default ProjectForm;
