
import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from "./signup.style";
import SetupComponent from './Setup.component';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import { ScrollView } from 'react-native-gesture-handler';
import MyStatusBar from '../../components/MyStatusBar';
import { request } from '../../axios';

export default function SignupGuest({navigation}) {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[{ flex: 1 }, {paddingTop: 10}]}
        >
            <MyStatusBar />
            <ImageBackground
                resizeMode="cover"
                style={styles.imgBg}
                source={require("../../assets/bg2.png")}
            >
                <ScrollView>
                    <SetupComponent setIsLoading={setIsLoading} navigation={navigation} />
                </ScrollView>
            </ImageBackground>
            {isLoading && <Loading />}
        </KeyboardAvoidingView>


    )
}


