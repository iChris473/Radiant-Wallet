import React from 'react';
import { Image } from 'react-native';

export default function XIcon({ width, height }) {
  return <Image
    source={require("../assets/xicon.png")}
    resizeMode="contain"
    style={{ width: width || 25, height: height || 25 }}
  />
}
