
import { View, Image, Text, TextInput, TouchableOpacity, Pressable, Keyboard, Alert } from 'react-native';
import { useContext, useState } from 'react';
import styles from "./signup.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';
import RNTextArea from '@freakycoder/react-native-text-area';
import { request } from '../../axios';
import AuthContext from '../../context/AuthContext';

export default function SignupComponent({ navigation, setIsLoading }) {

    const [mnemonic, setMnemonic] = useState('');
    
    const { setLoggedIn } = useContext(AuthContext);

    const importWallet = async () => {
        
        setIsLoading(true);


        try {
            
            await request.post('/import', { mnemonic });

            setIsLoading(false);

            setLoggedIn(true);

            // navigation.navigate("Dashboard");
       
        } catch (error) {
        
            setIsLoading(false);

            Alert.alert(error?.response?.data || 'Wallet not found');
        
        }

    }

    // const opacity = (isNoComplete.length === 11) ? true : false;

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
                <Text style={styles.royalipay}>Radiant Wallet</Text>
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
                    onChangeText={newText => setMnemonic(newText)}
                    defaultValue={mnemonic}
                />
            </View>
            {/* PROCEED BUTTON */}
            <TouchableOpacity
                disabled={!mnemonic}
                style={{ ...styles.button, zIndex: 5, opacity: mnemonic ? 1 : .6, width: "90%" }}
                onPress={importWallet}
            >
                <Text style={styles.btnText}>Import</Text>
            </TouchableOpacity>
            {/* ORANGE ELLIPSE */}
            <View style={styles.orangeEllipse} />
        </View>
    )
}