import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function AltIcon({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 25}
        height={height || 25}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="none" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}


