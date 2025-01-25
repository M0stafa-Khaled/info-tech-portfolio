import AnalyticCard from "./AnalyticCard";

const Analytics = () => {
  const analytics = [
    { title: "عدد الزيارات", value: 50000 },
    { title: "المستخدمين", value: 100 },
    { title: "المشاريع", value: 50 },
    { title: "الخدمات", value: 20 },
    { title: "الرسايل", value: 16 },
    { title: "الزيارات اليوم", value: 500 },
  ];
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      {analytics.map((analytic, idx) => (
        <AnalyticCard key={idx} title={analytic.title} value={analytic.value} />
      ))}
    </div>
  );
};

export default Analytics;
