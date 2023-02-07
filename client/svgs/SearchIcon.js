
import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function SearchIcon({width, height, color}) {
  return (
    <View>
      <Svg
        width={width || 20}
        height={height || 20}
        viewBox="0 0 20 20"
        fill={color || "grey"}
      >
        <Path fill-rule="none" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" clip-rule="evenodd" />
      </Svg>
    </View>
  );
}
