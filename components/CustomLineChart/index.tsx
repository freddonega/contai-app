import { LineChart, XAxis } from "react-native-svg-charts";
import { Gradient } from "./Gradient";
import * as shape from "d3-shape";
import colors from "@/colors";
import { Dots } from "./Dots";

export const CustomLineChart = () => {
  const data = [
    200, 500, 100, 1400, -20, 2000, 100, 1400, -20, 2000, 100, 1400,
  ];
  const days = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];
  return (
    <>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{
          strokeWidth: 3,
          stroke: "url(#gradient)",
        }}
        contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
        curve={shape.curveNatural}
      >
        <Gradient />
        <Dots />
      </LineChart>
      <XAxis
        data={data}
        formatLabel={(index) => days[index]}
        contentInset={{ left: 10, right: 10 }}
        svg={{
          fontSize: 12,
          fill: colors.contai.lightBlue,
          fontWeight: "bold",
        }}
      />
    </>
  );
};
