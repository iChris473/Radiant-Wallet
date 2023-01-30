
import { ImageBackground, KeyboardAvoidingView, View } from 'react-native';
import styles from "./signup.style";
import SignupComponent from './Signup.component';
import { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MyStatusBar from '../../components/MyStatusBar';

export default function SignupGuest({navigation}) {

    const confirmBtn = useRef();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[{ flex: 1 }, (Platform.OS === 'android') && {paddingTop: 10}]}
        >
            <MyStatusBar />
            <ImageBackground
                resizeMode="cover"
                style={styles.imgBg}
                source={require("../../assets/bg2.png")}
            >
                <ScrollView>
                    <SignupComponent confirmBtn={confirmBtn} navigation={navigation} />
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>


    )
}


