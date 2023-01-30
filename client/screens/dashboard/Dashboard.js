
import { View, ImageBackground, ScrollView, StatusBar, Platform } from 'react-native';
import React from 'react';
import styles from "./dashboard.style";
import DashboardComponent from './Dashboard.component';
import Sidebar from '../../components/sidebar/Sidebar';
import SeedPhrase from '../../components/phrase/SeedPhrase';

export default function Dashboard({navigation}) {

    const [showSide, setShowSide] = React.useState(false);

    const [showPhrase, setShowPhrase] = React.useState(false);

    return (
        <ImageBackground
            resizeMode="cover"
            style={[styles.imgBg, (Platform.OS === 'android') && {paddingTop: 30}]}
            source={require("../../assets/bg2.png")}
        >
            <StatusBar backgroundColor={'white'}  />
            <View style={styles.blueSemiCirlce} />
            <ScrollView scrollEnabled={!showSide}>
                <DashboardComponent navigation={navigation} showSide={showSide} setShowSide={setShowSide} setShowPhrase={setShowPhrase} />
            </ScrollView>
            {showPhrase && <SeedPhrase setShowPhrase={setShowPhrase} />  }
        </ImageBackground>
    )
}


