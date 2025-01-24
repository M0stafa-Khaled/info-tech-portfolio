import FileUploader from "../../../components/dashboard/FileUploader";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import { ADD_PROJECT_FORM_INPUTS, CATEGORIES } from "../../../constant";
import SelectMenu from "../../../components/ui/SelectMenu";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import { Switch } from "keep-react";
import { z } from "zod";
import projectSchema from "../../../validations/projectSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IProps {
  action: "create" | "update";
  project?: {
    id: string;
    title: string;
    description: string;
    tools: string;
    url: string;
    category: string;
    hidden: boolean;
    images: string[];
  };
}

const ProjectForm = ({ action, project }: IProps) => {
  const { title, description, tools, url, category, hidden } = project || {};
  const [selected, setSelected] = useState(category || CATEGORIES[0].value);
  const [files, setFiles] = useState<{
    imgOne: string | null;
    imgTwo: string | null;
    imgThree: string | null;
    imgFour: string | null;
  }>({
    imgOne: project?.images?.[0] || null,
    imgTwo: project?.images?.[1] || null,
    imgThree: project?.images?.[2] || null,
    imgFour: project?.images?.[3] || null,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: title || "",
      description: description || "",
      tools: tools || "",
      url: url || "",
      category: category || CATEGORIES[0].value,
      hidden: hidden || false,
      imgOne: undefined,
      imgTwo: undefined,
      imgThree: undefined,
      imgFour: undefined,
    },
  });

  const handleFileUpload = (file: File, name: string) => {
    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));
    setValue(name as keyof z.infer<typeof projectSchema>, file);
  };

  const onSubmit = (data: z.infer<typeof projectSchema>) => {
    console.log("Form submitted", data);
    // Action update
    if (project && action === "update") {
      // const _formData = {
      //   ...data,
      // };

      return;
    }
    // Action create
    //   const formData = {
    //     ...data,
    //     imgOne: files.imgOne,
    //     imgTwo: files.imgTwo,
    //     imgThree: files.imgThree,
    //     imgFour: files.imgFour,
    //   };
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-9 flex flex-col xl:flex-row gap-6 gap-y-9"
    >
      {/* Info */}
      <div className="flex flex-1 justify-center md:justify-start">
        <div className="max-w-md space-y-8 w-full">
          {ADD_PROJECT_FORM_INPUTS.map((input, idx) => (
            <div key={input.name}>
              <div key={idx} className="relative w-full min-w-[200px] h-11">
                <Input
                  type={input.type}
                  {...register(
                    input.name as keyof z.infer<typeof projectSchema>
                  )}
                />
                <Label>{input.label}</Label>
              </div>
              {errors[input.name as keyof z.infer<typeof projectSchema>] && (
                <p className="text-danger text-xs mt-1">
                  {
                    errors[input.name as keyof z.infer<typeof projectSchema>]
                      ?.message as string
                  }
                </p>
              )}
            </div>
          ))}

          {/* Category */}
          <div className="flex items-center">
            <span className="text-white w-40">نوع المشروع</span>
            <SelectMenu
              options={CATEGORIES}
              label="نوع المشروع"
              selected={selected}
              setSelected={(value) => {
                setSelected(value);
                setValue("category", value);
              }}
            />
            {errors.category && (
              <p className="text-danger text-xs mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
          {/* Show & Hidden */}
          <div className="flex items-center w-full gap-4">
            <span className="text-white">اخفاء المشروع</span>
            <Switch
              dir="ltr"
              onCheckedChange={(checked) => setValue("hidden", checked)}
              defaultChecked={hidden}
            />
          </div>
          {/* Submit */}
          <div className="w-full">
            <Button
              type="submit"
              className="rounded-xl w-full border-2 border-btn-primary text-blue py-4 hover:bg-btn-primary hover:text-white"
            >
              حفظ
            </Button>
          </div>
        </div>
      </div>
      {/* Upload Images */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-4">
          {["imgOne", "imgTwo", "imgThree", "imgFour"].map((imgName) => (
            <div key={imgName}>
              <FileUploader
                key={imgName}
                onFileUpload={(file) => handleFileUpload(file, imgName)}
                initialImage={files[imgName as keyof typeof files] ?? undefined}
                name={imgName}
                register={register(
                  imgName as keyof z.infer<typeof projectSchema>
                )}
              />
              <div>
                {errors[imgName as keyof z.infer<typeof projectSchema>] && (
                  <p className="text-danger text-xs mt-1">
                    {
                      errors[imgName as keyof z.infer<typeof projectSchema>]
                        ?.message as string
                    }
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
