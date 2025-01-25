import { FaFlag } from "react-icons/fa";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="h-screen mx-auto l flex justify-center items-center text-center px-8">
      <div>
        <FaFlag className="w-20 h-20 mx-auto text-white" />
        <h1 className="text-white mt-10 !text-3xl !leading-relaxed md:text-4xl">
          غير مصرح بالدخول <br /> خطأ 403 <br /> ليس لديك إذن للوصول
        </h1>
        <p className="text-muted mt-8 mb-14 text-lg leading-relaxed font-normal mx-auto md:max-w-sm">
          عذرًا، ليس لديك الصلاحيات اللازمة للوصول إلى هذه الصفحة. يرجى التواصل
          مع المسؤول إذا كنت تعتقد أن هذا خطأ.
        </p>
        <Button className="lg:w-fit p-0 rounded-lg overflow-hidden">
          <Link
            to={"/"}
            className="block bg-btn-secondary-hover hover:bg-btn-secondary-hover px-8 sm:px-24 py-3 text-white text-lg tracking-wide"
          >
            العودة للصفحة الرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
