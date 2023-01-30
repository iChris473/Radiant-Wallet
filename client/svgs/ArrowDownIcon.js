
import React from 'react';
import { SvgXml, View } from "react-native-svg"

export default function ArrowDownIcon({width, height, color}) {

    const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    `
    return <SvgXml width={width || 35} height={height || 35} color={color || "grey"} xml={xml} />
    
}



