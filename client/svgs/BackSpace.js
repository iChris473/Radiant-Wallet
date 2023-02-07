import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function Backspace({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 25}
        height={height || 25}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="none" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}



