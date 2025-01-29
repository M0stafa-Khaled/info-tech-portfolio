import { SetStateAction } from "react";
import Button from "../../ui/Button";

interface IProps {
  cate: {
    value: string;
    label: string;
  };
  setIsOpenEditModal: (value: SetStateAction<boolean>) => void;
  setIsOpenDeleteModal: (value: SetStateAction<boolean>) => void;
}

const CategoryCard = ({
  cate,
  setIsOpenDeleteModal,
  setIsOpenEditModal,
}: IProps) => {
  return (
    <div
      key={cate.value}
      className="border border-muted px-4 py-3 bg-background-gradient rounded-2xl"
    >
      <h3 className="text-lg font-medium text-white text-center py-3">
        {cate.label}
      </h3>
      {/* actions */}
      <div className="w-full flex flex-row justify-between gap-4 mt-3">
        <Button
          onClick={() => setIsOpenEditModal(true)}
          className="bg-btn-primary hover:bg-btn-primary-hover w-full text-white rounded-full py-2"
        >
          تعديل
        </Button>
        <Button
          onClick={() => setIsOpenDeleteModal(true)}
          className="bg-danger hover:bg-danger-hover w-full text-white rounded-full py-2"
        >
          حذف
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
