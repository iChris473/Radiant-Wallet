
import { View, Image, Text, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import styles from "./signup.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';
import * as Clipboard from 'expo-clipboard';
import { request } from '../../axios';

export default function SetupComponent({ navigation, setIsLoading }) {

    const [isNoComplete, setisNoComplete] = useState("");

    const [copied, setCopied] = useState(false);

    const copyAddress = async () => {

        await Clipboard.setStringAsync(mnemonic);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);

    }

    const opacity = (isNoComplete.length === 11) ? true : false;
    
    const [mnemonic, setMnemonic] = useState("");

    useEffect(() => {
        
        const createWalletFunction = async () => {
            try {
                const res = await request.post('/register');
                setMnemonic(res?.data?.mnemonic);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }

        createWalletFunction();

    }, []);

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
            </View>
            <View style={styles.secretDesc}>
                <Text style={styles.secret1}>Your Secret Phrase</Text>
                <Text style={styles.secret2}>Write down or copy these words in the right order and save them somewhere safe.</Text>
            </View>
            <View style={styles.phrases}>
                {
                    mnemonic
                    .split(' ')
                    .map((text, i) => (
                        <View style={styles.phrasec} key={i}>
                            <Text style={styles.iphrase}>{i}</Text>
                            <Text style={styles.phrase}>{text}</Text>
                        </View>
                    ))
                }
            </View>
            <TouchableOpacity onPress={copyAddress}>
                <Text style={[styles.copy, copied && {color: 'green'}]}>{copied ? 'Copied' : 'Copy'}</Text>
            </TouchableOpacity>
            <View style={styles.warningC}>
                <Text style={styles.warning1}>DO NOT share your phrase to anyone as this gives full access to your wallet!</Text>
                <Text style={styles.warning2}>Trust Wallet support will NEVER reach out to ask for it</Text>
            </View>
            {/* PROCEED BUTTON */}
            <TouchableOpacity
                disabled={opacity}
                style={{ ...styles.button, zIndex: 5, opacity: !opacity ? 1 : .4, width: "90%" }}
                onPress={() => navigation.navigate("RegisterGuest")}
            >
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
            {/* ORANGE ELLIPSE */}
            <View style={styles.orangeEllipse} />
        </View>
    )
}