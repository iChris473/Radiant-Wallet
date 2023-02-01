
import { ImageBackground, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import StartComponent from './Start.component';
import styles from "./start.style";
import AuthContext from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';

export default function Start({navigation}) {

    const { appLoading } = useContext(AuthContext);

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
            {appLoading && <Loading /> }
        </ImageBackground>
    )
}