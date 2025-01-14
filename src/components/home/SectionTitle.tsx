interface IProps {
  title: string;
}

const SectionTitle = ({ title }: IProps) => {
  return (
    <div className="bg-background-gradient mb-[18px] mt-[36px] lg:mb-[36px] lg:mt-[72px] rounded-2xl lg:rounded-3xl">
      <div className="relative p-2 md:p-4 min-h-16 md:min-h-36 lg:min-h-56 flex justify-center items-center">
        <h2 className="w-full text-center text-section-back-title font-black text-[40px] md:text-[72px] lg:text-[96px] absolute">
          {title}
        </h2>
        <h2 className="w-full text-center text-section-title font-black text-[32px] md:text-[48px] lg:text-[64px] relative">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
