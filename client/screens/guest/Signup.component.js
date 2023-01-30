
import { View, Image, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import { useState } from 'react';
import styles from "./signup.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';
import RNTextArea from '@freakycoder/react-native-text-area';

export default function SignupComponent({ navigation, confirmBtn }) {

    const [viewPass, setViewPass] = useState(true)

    const [isNoComplete, setisNoComplete] = useState("")

    const opacity = (isNoComplete.length === 11) ? true : false

    return (
        <View style={styles.container}>
            <Pressable onPressIn={() => Keyboard.dismiss()} style={{ position: "absolute", height: "100%", width: "100%" }} />
            {/* BACK ICON */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                <ArrowLeftIcon color={"#6843A1"} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/logo1.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.royalipay}>Radiant Walllet</Text>
            </View>
            <View style={styles.secretDesc}>
                <Text style={styles.secretText1}>Enter your secret phrase to import wallet</Text>
                <Text style={styles.secretText2}>Secret Phrases are typically 12(sometimes 24) words seperated by single spaces</Text>
            </View>
            <View style={styles.inputContainer}>
                <RNTextArea
                    maxCharLimit={200}
                    placeholderTextColor="black"
                    exceedCharCountColor="#990606"
                    placeholder="Enter Secret Phrase"
                />
            </View>
            {/* PROCEED BUTTON */}
            <TouchableOpacity
                disabled={opacity}
                ref={confirmBtn}
                style={{ ...styles.button, zIndex: 5, opacity: !opacity ? 1 : .4, width: "90%" }}
                onPress={() => navigation.navigate("Dashboard")}
            >
                <Text style={styles.btnText}>Import</Text>
            </TouchableOpacity>
            {/* ORANGE ELLIPSE */}
            <View style={styles.orangeEllipse} />
        </View>
    )
}