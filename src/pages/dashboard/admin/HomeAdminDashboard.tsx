import Analytics from "../../../components/dashboard/home/Analytics";
import ChartAnalytics from "../../../components/dashboard/home/ChartAnalytics";
import VisitorsTrafic from "../../../components/dashboard/home/VisitorsTrafic";

const HomeAdminDashboard = () => {
  const visitors = [
    { country: "الكويت", value: 10 },
    { country: "الامارات", value: 5 },
    { country: "المملكة العربية السعودية", value: 15 },
    { country: "مصر", value: 60 },
    { country: "اخر", value: 10 },
  ];
  return (
    // Analytics
    <div className="my-9">
      {/* Top Analytics */}
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-2/5">
          <Analytics />
        </div>
        <div className="w-full xl:w-[35%] p-3 md:p-6 bg-dark rounded-2xl border border-dark-blue">
          <VisitorsTrafic visitors={visitors} lable="الزوار حسب البلد" />
        </div>
        <div className="w-full xl:w-[25%] py-3 md:py-6 px-3 md:px-6 xl:px-3 2xl:px-4 bg-dark rounded-2xl border border-dark-blue">
          <VisitorsTrafic visitors={visitors} lable="الزوار الجدد" />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-dark p-2 md:p-6 rounded-2xl border border-dark-blue mt-9">
        <ChartAnalytics />
      </div>

      <div className="mt-9"></div>
    </div>
  );
};

export default HomeAdminDashboard;
