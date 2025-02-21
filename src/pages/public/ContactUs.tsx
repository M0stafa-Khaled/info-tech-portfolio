import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BgImage from "../../components/BgImage";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Textarea from "../../components/ui/Textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { cardVariants, containerVariants } from "../../animations";

const ContactUs = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Animation Variants
  const subjectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
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
        <p className="text-lg p-4 text-muted">
          أي سؤال أو ملاحظة؟ فقط اكتب لنا رسالة!
        </p>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="bg-background-gradient rounded-2xl lg:rounded-3xl text-white w-full py-6 px-4 lg:px-6"
      >
        <div className="flex flex-col xl:flex-row gap-x-12 xl:gap-x-16 gap-y-12">
          {/* Contact Info */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-dark space-y-4 w-auto lg:min-w-max py-4 px-4 md:px-6 rounded-2xl"
          >
            <div className="px-4 py-3 space-y-2">
              <h3 className="text-xl md:text-[28px] font-semibold">
                معلومات الاتصال
              </h3>
              <p className="text-muted md:text-lg">
                يمكنك التواصل معنا باستخدام هذه المعلومات
              </p>
            </div>
            <div className="px-4 py-3 space-y-5">
              {[
                { icon: <FaPhone size={24} />, text: "01016440812" },
                { icon: <FaEnvelope size={24} />, text: "info@infotech.eg" },
                { icon: <FaMapMarkerAlt size={24} />, text: "القاهرة, مصر" },
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
                  className="flex items-center gap-3 text-sm md:text-lg"
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
            className="w-full rounded-lg flex flex-col gap-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Inputs */}
            <motion.div variants={cardVariants} className="flex flex-col gap-6">
              {/* Inputs Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                {[
                  { label: "الاسم الاول", key: "firstName" },
                  { label: "الاسم الثاني", key: "lastName" },
                ].map((input) => (
                  <motion.div
                    key={input.key}
                    variants={cardVariants}
                    className="relative w-full min-w-[200px] h-11"
                  >
                    <Input />
                    <Label>{input.label}</Label>
                  </motion.div>
                ))}
              </div>
              {/* Inputs Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                {[
                  { label: "البريد الالكتروني", key: "email" },
                  { label: "رقم الهاتف", key: "phone" },
                ].map((input) => (
                  <motion.div
                    key={input.key}
                    variants={cardVariants}
                    className="relative w-full min-w-[200px] h-11"
                  >
                    <Input />
                    <Label>{input.label}</Label>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Options */}
            <motion.div variants={cardVariants}>
              <p className="mb-4 text-lg">اختر الموضوع</p>
              <div className="flex justify-between flex-wrap gap-3 ">
                {["استفسار عام", "دعم فني", "اقتراحات", "أخرى"].map(
                  (option, index) => (
                    <motion.div
                      key={index}
                      variants={subjectVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex gap-8 min-w-36"
                    >
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                          <input
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            name="subject"
                            type="radio"
                            id={`subject-${index}`}
                            className="peer relative appearance-none w-5 h-5 border rounded-full cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 before:transition-opacity border-white bg-white p-0 transition-all hover:before:opacity-0"
                            value={option}
                            checked={selectedSubject === option}
                          />
                          <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                            <FiCheck size={14} className="text-gray-900" />
                          </span>
                        </label>
                        <label
                          htmlFor={`subject-${index}`}
                          className="select-none cursor-pointer mt-px"
                        >
                          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-muted">
                            {option}
                          </p>
                        </label>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={cardVariants}>
              <div className="relative w-full min-w-[200px]">
                <Textarea />
                <Label>الرسالة</Label>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={cardVariants}>
              <Button
                type="submit"
                className="w-full lg:w-[200px] normal-case py-4 bg-dark text-white text-base font-normal rounded-xl"
              >
                إرسال الرسالة
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
