import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function ArrowDownIcon({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 25}
        height={height || 25}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="none" d="M19.5 8.25l-7.5 7.5-7.5-7.5" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}