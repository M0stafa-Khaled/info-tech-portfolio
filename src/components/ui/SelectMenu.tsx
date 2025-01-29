import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-react";

interface IProps {
  options: {
    value: string;
    label: string;
  }[];
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
          {options.map(({ value, label }, idx) => (
            <SelectItem
              key={idx}
              value={value}
              className="text-white w-full cursor-pointer justify-end"
            >
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
