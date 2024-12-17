import { LineChart } from "@mantine/charts";
import { data } from "./data";

export default function DashboardGraph() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      withLegend
      withPointLabels
      series={[
        { name: "Apples", color: "indigo.6" },
        { name: "Oranges", color: "blue.6" },
      ]}
    />
  );
}
