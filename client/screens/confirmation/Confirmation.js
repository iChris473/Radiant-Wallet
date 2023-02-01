
import { View, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
import styles from "./confirm.style";
import MyStatusBar from '../../components/MyStatusBar';
import ConfirmConponent from './Confirm.component';

export default function Confirmation({navigation, route}) {

    const [coin, setCoin] = useState(route.params.data);

    return (
        <ImageBackground
            resizeMode="cover"
            style={[styles.imgBg, {paddingTop: 30}]}
            source={require("../../assets/bg2.png")}
        >
            <MyStatusBar />
            <View style={styles.blueSemiCirlce} />
            <ScrollView>
                <ConfirmConponent coin={coin} navigation={navigation} />
            </ScrollView>
        </ImageBackground>
    )
}


