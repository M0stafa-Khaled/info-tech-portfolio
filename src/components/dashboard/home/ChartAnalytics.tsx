import { Area, AreaChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "keep-react";

const ChartAnalytics = () => {
  const chartData = [
    { month: "يناير", الزيارات: 186 },
    { month: "فبراير", الزيارات: 305 },
    { month: "مارس", الزيارات: 237 },
    { month: "أبريل", الزيارات: 73 },
    { month: "مايو", الزيارات: 209 },
    { month: "يونيو", الزيارات: 214 },
    { month: "يوليو", الزيارات: 250 },
    { month: "اغسطس", الزيارات: 214 },
    { month: "سبتمبر", الزيارات: 140 },
    { month: "أكتوبر", الزيارات: 214 },
    { month: "نوفمبر", الزيارات: 510 },
    { month: "ديسمبر", الزيارات: 350 },
  ];

  const chartConfig = {
    الزيارات: {
      label: "الزيارات",
      color: "#1B4DFF",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <YAxis
          dataKey="الزيارات"
          tickLine={false}
          tickMargin={24}
          axisLine={false}
        />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={true}
          tickMargin={8}
        />
        <defs>
          <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="الزيارات" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <ChartLegend
          verticalAlign="top"
          align="right"
          content={<ChartLegendContent />}
        />
        <Area
          stackId="a"
          type="natural"
          dataKey="الزيارات"
          stroke="#fff"
          fillOpacity={1}
          fill="url(#الزيارات)"
          dot={true}
          isAnimationActive
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default ChartAnalytics;
