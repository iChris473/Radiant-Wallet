import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function ArrowLeftIcon({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 35}
        height={height || 35}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="evenodd"d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}


