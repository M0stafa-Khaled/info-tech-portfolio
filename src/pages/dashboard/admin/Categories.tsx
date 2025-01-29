import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { CATEGORIES } from "../../../constant";
import Modal from "../../../components/shared/Modal";
import { useState } from "react";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import CategoryCard from "../../../components/dashboard/categories/CategoryCard";

const Categories = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);

  return (
    <div className="my-9">
      <div className="flex flex-col sm:flex-row gap-6">
        <h2 className="text-3xl font-medium text-white">إدارة الاقسام</h2>
        <Button
          onClick={() => setIsOpenAddModal(true)}
          className="bg-btn-primary text-white rounded-full"
        >
          <Link
            to={"/dashboard/admin/categories"}
            className="flex justify-center items-center w-full py-3 px-6"
          >
            اضافة قسم جديد
          </Link>
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((cate, idx) => (
          <CategoryCard
            key={idx}
            cate={cate}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            setIsOpenEditModal={setIsOpenEditModal}
          />
        ))}
      </div>
      {/* Add Modal */}
      <Modal
        isOpen={isOpenAddModal}
        closeModal={() => setIsOpenAddModal(false)}
        title="إضافة قسم جديد"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <div className="relative w-full min-w-[200px] h-11">
            <Input type="text" />
            <Label>اسم القسم</Label>
          </div>
          <div className="flex flex-col gap-y-3">
            <Button
              type="submit"
              className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
            >
              اضافة
            </Button>
            <Button
              onClick={() => setIsOpenAddModal(false)}
              className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4"
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Modal>
      {/* Edit Modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={() => setIsOpenEditModal(false)}
        title="تعديل اسم القسم"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <div className="relative w-full min-w-[200px] h-11">
            <Input type="text" />
            <Label>اسم القسم</Label>
          </div>
          <div className="flex flex-col gap-y-3">
            <Button
              type="submit"
              className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
            >
              تعديل
            </Button>
            <Button
              onClick={() => setIsOpenEditModal(false)}
              className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4"
            >
              إلغاء
            </Button>
          </div>
        </form>
      </Modal>
      {/* Delete Modal */}
      <Modal
        isOpen={isOpenDeleteModal}
        closeModal={() => setIsOpenDeleteModal(false)}
        title="حذف القسم"
        description="هل انت متاكد من حذف هذا القسم؟"
      >
        <div className="flex flex-col gap-y-3">
          <Button className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4">
            حذف
          </Button>
          <Button
            onClick={() => setIsOpenDeleteModal(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Categories;
