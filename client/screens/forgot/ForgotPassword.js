
import { ImageBackground, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from "../login/login.style";
import ForgotComponent from './Forgot.component';
import { StatusBar } from 'expo-status-bar';

export default function ForgotPassword({navigation}) {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.KeyboardWrapper}
        >
            <ImageBackground
                resizeMode="cover"
                style={styles.imgBg}
                source={require("../../assets/bg2.png")}
            >
                <ScrollView scrollEnabled={false}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ForgotComponent navigation={navigation} />
                    </TouchableWithoutFeedback>
                </ScrollView>
            </ImageBackground>
            <StatusBar style='dark' />
        </KeyboardAvoidingView>


    )
}


