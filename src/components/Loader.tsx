import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-9">
      <AiOutlineLoading3Quarters
        className="animate-spin text-white"
        size={24}
      />
    </div>
  );
};

export default Loader;
