
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from "./pin.style"
import Pin from './Pin.component';
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';
import { StatusBar } from 'expo-status-bar';

export default function CreatePin({navigation}) {
  return (
      <ImageBackground
          resizeMode="cover"
          style={styles.imgBg}
          source={require("../../assets/bg2.png")}
      >
           <View style={styles.blueSemiCirlce} />
          <View>
              {/* BACK ICON */}
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                  <ArrowLeftIcon color={"#6843A1"} />
              </TouchableOpacity>
              <Pin navigation={navigation} mode={"Create Pin"} />
          </View>
          <StatusBar style='dark' />
      </ImageBackground>
  )
}
