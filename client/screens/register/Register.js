
import { ImageBackground, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import styles from "../login/login.style";
import RegisterComponent from './Register.component';
import { StatusBar } from 'expo-status-bar';
 
export default function Register({navigation}) {

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
                 <View style={styles.blueSemiCirlce} />
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <RegisterComponent navigation={navigation} />
                    </TouchableWithoutFeedback>
                </ScrollView>
                <StatusBar style="dark" />
            </ImageBackground>
        </KeyboardAvoidingView>


    )
}


