import { useEffect } from "react";

import CategoryCard from "../../../components/dashboard/categories/CategoryCard";
import { useGetAllCategories } from "../../../lib/react-query/categories";
import { toast } from "react-toastify";
import CategoryCardSkeleton from "../../../components/ui/CategoryCardSkeleton";
import AddCategoryButton from "../../../components/dashboard/categories/AddCategoryModalButton";

const Categories = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error,
  } = useGetAllCategories();

  useEffect(() => {
    if (error) toast.error("لقد حدث خطأ اثناء عرض الاقسام حاول لاحقا");
  }, [error]);

  return (
    <div className="my-9">
      <div className="flex flex-col sm:flex-row gap-6">
        <h2 className="text-3xl font-medium text-white">إدارة الاقسام</h2>
        <AddCategoryButton />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoadingCategories ? (
          <>
            {Array.from({ length: 4 }, (_, idx) => (
              <CategoryCardSkeleton key={idx} />
            ))}
          </>
        ) : !categories?.data.length ? (
          <h2 className="text-white text-xl lg:text-2xl my-6">لا يوجد اقسام</h2>
        ) : (
          categories?.data?.map((cate) => (
            <CategoryCard key={cate.id} category={cate} />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
