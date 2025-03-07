import { ICategory } from "../../../interfaces";
import DeleteCategoryModalButton from "./DeleteCategoryModalButton";
import EditCategoryButton from "./EditCategoryModalButton";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <div
      key={category.name}
      className="border border-muted px-4 py-3 bg-background-gradient rounded-2xl"
    >
      <h3 className="text-lg font-medium text-white text-center py-3">
        {category.name}
      </h3>
      {/* actions */}
      <div className="w-full flex flex-row justify-between gap-4 mt-3">
        <EditCategoryButton id={category.id} name={category.name} />
        <DeleteCategoryModalButton id={category.id} />
      </div>
    </div>
  );
};

export default CategoryCard;
