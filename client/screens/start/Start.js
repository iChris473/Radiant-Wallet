
import { ImageBackground, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StartComponent from './Start.component';
import styles from "./start.style";

export default function Start({navigation}) {
    return (
        <ImageBackground
            resizeMode="cover"
            style={styles.imgBg}
            source={require("../../assets/bg2.png")}
        >
            <StatusBar backgroundColor='white' />
             <View style={styles.blueSemiCirlce} />
            <View>
                <StartComponent navigation={navigation} />
            </View>
            <StatusBar style="dark" />
        </ImageBackground>
    )
}