import { GoDotFill } from "react-icons/go";
interface IProps {
  visitors: {
    country: string;
    value: number;
  }[];
  lable: string;
}

const VisitorsTrafic = ({ visitors, lable }: IProps) => {
  return (
    <>
      <div className="flex flex-col gap-9">
        <h3 className="text-white">{lable}</h3>
        <div className="h-full px-5 xl:px-0 text-white flex flex-col gap-3">
          {visitors.map((visitor, idx) => (
            <div key={idx} className="flex justify-between">
              <div className="flex items-center gap-2">
                <span>
                  <GoDotFill size={20} className="text-white" />
                </span>
                <h5 className="text-xs">{visitor.country}</h5>
              </div>
              <p className="text-sm">{visitor.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisitorsTrafic;
