import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-react";
import { ICategory } from "../../interfaces";

type Option = 
  | ICategory 
  | { label: string; value: string; id?: string | number };

interface IProps {
  options: Option[];
  selected: string;
  setSelected: (value: string) => void;
  label?: string;
  className?: string;
}

const SelectMenu = ({
  options,
  selected,
  setSelected,
  label,
  className,
}: IProps) => {
  // Type guard to check if an option is an ICategory
  const isCategory = (option: Option): option is ICategory => 
    'name' in option;

  return (
    <Select
      dir="rtl"
      value={selected}
      onValueChange={(value) => setSelected(value)}
    >
      <SelectAction
        className={`w-full bg-dark text-white border-dark-blue h-auto py-4 px-4 ${className}`}
      >
        <SelectValue placeholder="اختر" />
      </SelectAction>
      <SelectContent className="bg-dark border-dark-blue">
        <SelectGroup className="flex-row">
          <SelectLabel className="text-muted w-full text-end">
            {label}
          </SelectLabel>
          {options?.map((option) => (
            <SelectItem
              key={
                isCategory(option) 
                  ? `category-${option.id}` 
                  : `option-${option.value}`
              }
              value={
                isCategory(option) 
                  ? `${option.id}` 
                  : option.value
              }
              className="text-white w-full cursor-pointer justify-end"
            >
              {isCategory(option) ? option.name : option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
