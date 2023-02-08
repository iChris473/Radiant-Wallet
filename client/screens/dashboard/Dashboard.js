
import { View, ImageBackground, ScrollView, StatusBar, Platform } from 'react-native';
import React from 'react';
import styles from "./dashboard.style";
import DashboardComponent from './Dashboard.component';
import Settings from '../../components/phrase/Settings';
import Loading from '../../components/loading/Loading';

export default function Dashboard({navigation}) {

    const [showPhrase, setShowPhrase] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <ImageBackground
            resizeMode="cover"
            style={[styles.imgBg, {paddingTop: Platform.OS === 'ios' ? 50 : 10}]}
            source={require("../../assets/bg2.png")}
        >
            <StatusBar />
            <View style={styles.blueSemiCirlce} />
            <DashboardComponent navigation={navigation} setIsLoading={setIsLoading} setShowPhrase={setShowPhrase} />
            {showPhrase && <Settings setShowPhrase={setShowPhrase} />}
            {isLoading && <Loading />}
        </ImageBackground>
    )
}


