
import { ImageBackground, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import styles from "./login.style";
import LoginComponent from './Login.component';
import { StatusBar } from 'expo-status-bar';
import MyStatusBar from '../../components/MyStatusBar';

export default function Login({navigation}) {

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
          <MyStatusBar />
          <LoginComponent navigation={navigation} />
          <StatusBar style="dark" />
        </ImageBackground>
      </KeyboardAvoidingView>
    );
}


