import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import BgImage from "../../components/BgImage";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Textarea from "../../components/ui/Textarea";

const ContactUs = () => {
  return (
    <section className="container">
      <BgImage />
      <div className="text-center my-9 lg:mt-[72px] text-white">
        <h1 className="text-4xl font-bold">اتصل بنا</h1>
        <p className="text-lg p-4 text-muted">
          أي سؤال أو ملاحظة؟ فقط اكتب لنا رسالة!
        </p>
      </div>
      <div className="bg-background-gradient rounded-2xl lg:rounded-3xl text-white w-full py-6 px-4 lg:px-6">
        <div className="flex flex-col xl:flex-row gap-x-12 xl:gap-x-16 gap-y-12">
          {/* Contact Info */}
          <div className="bg-dark space-y-4 w-auto lg:min-w-max py-4 px-4 md:px-6 rounded-2xl">
            <div className="px-4 py-3 space-y-2">
              <h3 className="text-xl md:text-[28px] font-semibold">
                معلومات الاتصال
              </h3>
              <p className="text-muted md:text-lg">
                يمكنك التواصل معنا باستخدام هذه المعلومات
              </p>
            </div>
            <div className="px-4 py-3 space-y-5">
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaPhone size={24} />
                </span>
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaEnvelope size={24} />
                </span>
                <span>info@infotech.eg</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-lg">
                <span>
                  <FaMapMarkerAlt size={24} />
                </span>
                <span>القاهرة, مصر</span>
              </div>
            </div>
          </div>

          {/* From */}
          <form
            className="w-full rounded-lg flex flex-col gap-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Inputs */}
            <div className="flex flex-col gap-6">
              {/* Inputs Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full min-w-[200px] h-11">
                  <Input />
                  <Label>الاسم الاول</Label>
                </div>
                <div className="relative w-full min-w-[200px] h-11">
                  <Input />
                  <Label>الاسم الثاني</Label>
                </div>
              </div>
              {/* Inputs Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full min-w-[200px] h-11">
                  <Input />
                  <Label>البريد الالكتروني</Label>
                </div>
                <div className="relative w-full min-w-[200px] h-11">
                  <Input />
                  <Label>رقم الهاتف</Label>
                </div>
              </div>
            </div>

            {/* Options */}
            <div>
              <p className="mb-4 text-lg">اختر الموضوع</p>
              <div className="flex justify-between flex-wrap gap-3 ">
                {["استفسار عام", "دعم فني", "اقتراحات", "أخرى"].map(
                  (option, index) => (
                    <div key={index} className="flex gap-8 min-w-36">
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                          <input
                            onChange={(e) => console.log(e.target.value)}
                            name="subject"
                            type="radio"
                            id={`subject-${index}`}
                            className="peer relative appearance-none w-5 h-5 border rounded-full cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 before:transition-opacity border-white bg-white p-0 transition-all hover:before:opacity-0"
                            value={option}
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
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Message */}
            <div>
              <div className="relative w-full min-w-[200px]">
                <Textarea />
                <Label>الرسالة</Label>
              </div>
            </div>
            {/* Submit */}
            <div>
              <Button
                type="submit"
                className="w-full lg:w-[200px] normal-case py-4 bg-dark text-white text-base font-normal rounded-xl"
              >
                إرسال الرسالة
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
