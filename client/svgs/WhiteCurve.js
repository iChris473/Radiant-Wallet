import React from 'react';
import{ SvgXml } from "react-native-svg"

export default function WhiteCurve() {

  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="441.372" height="421.549" viewBox="0 0 441.372 421.549">
      <defs>
        <filter id="Path_159" x="0" y="0" width="441.372" height="421.549" filterUnits="userSpaceOnUse">
          <feOffset dy="-8" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="11" result="blur"/>
          <feFlood flood-opacity="0.102"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_159)">
        <path id="Path_159-2" data-name="Path 159" d="M167.334,478.4s-.946-109.427,0-110.293c4.3-3.938-2.578,29.116,30.855,15.529s15.162,31.175,37.746,45.616,34.511-2.4,94.905-22.554,55,44.876,94.685,32.977,35.81-52.157,76.792-30.193,38.411-23.788,39.486-2.784c.527,10.292,2.031,98.964-5.508,172.128,2.968,52.9,7.454,90.668,5.508,112.888-1.535,17.522-27.72,31.373-14.451,30.474,55.8,2.39-90-1.313-158.832,0-42.4.809-151.746,0-151.746,0s-50.266,5.262-49.44-6.836C169.485,683.846,167.334,478.4,167.334,478.4Z" transform="translate(-133.91 -326.78)" fill="#fff"/>
      </g>
    </svg>
  `

  return (
    <SvgXml xml={xml} />
  );
}
