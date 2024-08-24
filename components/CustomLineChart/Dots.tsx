import { Circle } from "react-native-svg";
import React, { useState } from "react";
import colors from "@/colors";

interface DecoratorProps {
  x: (arg: number) => number;
  y: (arg: number) => number;
  data: number[];
}

export const Dots = (props: Partial<DecoratorProps>) => {
  const { x, y, data } = props;
  if (!x || !y || !data) return null;
  return (
    <>
      {data?.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={10}
          stroke={colors.contai.darkBlue}
          strokeWidth={10}
          fill={colors.contai.lightBlue}
          onPress={() => console.log(x)}
        />
      ))}
    </>
  );
};
