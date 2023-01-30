
import React from 'react';
import{ SvgXml } from "react-native-svg"

export default function SearchIcon({width, height, color}) {

    const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  `

  return <SvgXml width={width || 20} height={height || 20} color={color || "grey"} xml={xml} />;
}



