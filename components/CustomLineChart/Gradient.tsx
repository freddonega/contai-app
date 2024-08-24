import { Defs, LinearGradient, Stop } from "react-native-svg";
import colors from "@/colors";
export const Gradient = () => (
  <Defs key={"gradient"}>
    <LinearGradient id={"gradient"} x1={"0"} x2={"100%"} y2={"0%"}>
      <Stop offset={"0%"} stopColor={colors.contai.blue} />
      <Stop offset={"100%"} stopColor={colors.contai.lightBlue} />
    </LinearGradient>
  </Defs>
);
