
import { View, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "./signup.style";
import { StatusBar } from 'expo-status-bar';
import Otp from '../../components/otp/Otp';

export default function GuestOtp({navigation}) {

    return (
        <View
        //     // behavior={Platform.OS === "ios" ? "padding" : "height"}
        //     // style={styles.KeyboardWrapper}
        >
            <ImageBackground
                resizeMode="cover"
                style={[styles.imgBg, (Platform.OS === 'android') && {paddingTop: 30}]}
                source={require("../../assets/bg2.png")}
            >
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Otp navigation={navigation} />
                    </TouchableWithoutFeedback>
                </ScrollView>
            </ImageBackground>
            <StatusBar style='dark' />
        </View>


    )
}


