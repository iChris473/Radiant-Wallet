import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function XIcon({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 35}
        height={height || 35}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="none" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}
