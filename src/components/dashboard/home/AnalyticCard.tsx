interface IProps {
  title: string;
  value: number;
}
const AnalyticCard = ({ title, value }: IProps) => {
  return (
    <div className="h-full w-full bg-dark border border-dark-blue p-4 flex flex-col justify-center items-center gap-4 rounded-2xl ">
      <h3 className="text-muted text-center">{title}</h3>
      <p className="text-white text-center text-xl">{value}</p>
    </div>
  );
};

export default AnalyticCard;
