import { Button } from "keep-react";
import { FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen mx-auto l flex justify-center items-center text-center px-8">
      <div>
        <FaFlag className="w-20 h-20 mx-auto text-white" />

        <p className="text-muted mt-8 mb-14 text-lg leading-relaxed font-normal mx-auto md:max-w-sm">
          لا تقلق، فريقنا يعمل بالفعل على حل المشكلة. يرجى تحديث الصفحة أو
          العودة لاحقًا.
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

export default Error;
