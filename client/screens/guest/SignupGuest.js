
import { ImageBackground, KeyboardAvoidingView, View } from 'react-native';
import styles from "./signup.style";
import SignupComponent from './Signup.component';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MyStatusBar from '../../components/MyStatusBar';
import Loading from '../../components/loading/Loading';

export default function SignupGuest({navigation}) {

    const [isLoading, setIsLoading] = useState(false);

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
                    <SignupComponent setIsLoading={setIsLoading} navigation={navigation} />
                </ScrollView>
            </ImageBackground>
            { isLoading && <Loading /> }
        </KeyboardAvoidingView>
    )
}


