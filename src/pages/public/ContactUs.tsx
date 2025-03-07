import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import BgImage from "../../components/BgImage";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Textarea from "../../components/ui/Textarea";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "../../animations";
import { MESSAGE_INPUTS } from "../../constant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import messageSchema from "../../validations/messageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendMessage } from "../../lib/react-query/messages";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ContactUs = () => {
  const {
    settings: { phone, address, email },
  } = useSelector((state: RootState) => state.settings);
  const { mutateAsync: sendMessage, isPending } = useSendMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    try {
      const { message, status } = await sendMessage(data);
      if (status !== "success") return toast.error(message);
      toast.success(message);
      reset();
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
        toast.error("حدث خطأ أثناء ارسال الرسالة");
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container"
    >
      <BgImage />
      <motion.div
        variants={cardVariants}
        className="text-center my-9 lg:mt-[72px] text-white"
      >
        <h1 className="text-4xl font-bold">اتصل بنا</h1>
        <p className="p-4 text-muted">أي سؤال أو ملاحظة؟ فقط اكتب لنا رسالة!</p>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="bg-background-gradient rounded-2xl lg:rounded-3xl text-white w-full py-6 px-4 lg:px-6"
      >
        <div className="flex flex-col xl:flex-row gap-x-12 xl:gap-x-16 gap-y-12">
          {/* Contact Info */}
          <motion.div
            variants={cardVariants}
            className="bg-dark space-y-4 w-auto lg:min-w-max py-4 px-4 md:px-6 rounded-2xl"
          >
            <div className="px-4 py-3 space-y-2">
              <h3 className="text-xl md:text-[28px] font-semibold">
                معلومات الاتصال
              </h3>
              <p className="text-muted">
                يمكنك التواصل معنا باستخدام هذه المعلومات
              </p>
            </div>
            <div className="px-4 py-3 space-y-3">
              {[
                { icon: <FaPhone size={24} />, text: phone || "+201016440812" },
                {
                  icon: <FaEnvelope size={24} />,
                  text: email || "info@infotech.eg",
                },
                {
                  icon: <FaMapMarkerAlt size={24} />,
                  text: address || "القاهرة, مصر",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex items-center gap-3"
                >
                  <span>{contact.icon}</span>
                  <span>{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={cardVariants}
            className="w-full rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Inputs */}
            {/* Inputs Row 1 */}
            <motion.div
              variants={cardVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {MESSAGE_INPUTS.map((input) => {
                const inputName = input.name as keyof z.infer<
                  typeof messageSchema
                >;

                return input.name === "message" ? (
                  <motion.div key={input.name} variants={cardVariants}>
                    <div className="relative w-full min-w-[200px]">
                      <Textarea
                        {...register(
                          input.name as keyof z.infer<typeof messageSchema>
                        )}
                      />
                      <Label>الرسالة</Label>
                      {errors[inputName] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors[inputName]?.message as string}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={input.name}
                    variants={cardVariants}
                    className="relative w-full min-w-[200px] h-11"
                  >
                    <Input {...register(inputName)} />
                    <Label>{input.label}</Label>
                    {errors[inputName] && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors[inputName]?.message as string}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Submit */}
            <motion.div variants={cardVariants}>
              <Button
                type="submit"
                disabled={isPending}
                className="mt-6 w-full lg:w-[200px] normal-case py-4 bg-dark text-white text-base font-normal rounded-xl flex justify-center items-center gap-3"
              >
                إرسال الرسالة
                {isPending && (
                  <AiOutlineLoading3Quarters
                    className="animate-spin"
                    size={20}
                  />
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
