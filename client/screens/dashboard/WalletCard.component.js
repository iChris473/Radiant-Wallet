

import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import styles from "./dashboard.style";

export default function WalletCardComponent({navigation, wallet}) {

    const [fadeAnimation] = useState(new Animated.Value(0));

    const [faded, setFaded] = useState(true);

    const fadeIn = () => (
        Animated.timing(fadeAnimation, {
            useNativeDriver: true,
            toValue: 1,
            duration: 2000
        }).start()   
    );

    const fadeOut = () => (
        Animated.timing(fadeAnimation, {
            useNativeDriver: true,
            toValue: .1,
            duration: 2000
        }).start()
    );

    useEffect(() => {

        if (faded) {
            fadeOut()
        } else {
            fadeIn()
        };

        setTimeout(() => {
            setFaded(!faded)
        }, 2000);

    }, [faded]);

    return (
        <View style={styles.subCard}>
            {/* DESIGNS */}
            <Animated.View style={[styles.designParent, { opacity: fadeAnimation }]}>
                <View style={styles.blueEllipes1} />
                <View style={styles.blueEllipes2} />
                <View style={styles.pinkEllipes1} />
                <View style={styles.pinkEllipes2} />
                <View style={styles.pinkLine1} />
                <View style={styles.pinkLine2} />
                <View style={styles.pinkLine3} />
            </Animated.View>
            <View style={styles.subCardTopBar}>
                <View style={styles.walletContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.walletImg}
                        source={require("../../assets/walletIcon.png")}
                    />
                    <Text style={styles.walletBlnce}>Wallet Balance</Text>
                </View>
                <TouchableOpacity style={styles.fundImgCont} onPress={() => navigation.navigate('ConfirmPayment',  {data: { name: 'USDT', description: 'Tether USDT (BEP 20)', pic: require("../../assets/ethqr.jpeg"), add: 'bc1q9ud9v0yjrkejdj8a3yx0fz2xkyg4hwtw4e6hue' }} )}>
                    <Image
                        resizeMode="cover"
                        style={styles.fundWalletImg}
                        source={require("../../assets/fundWallet.png")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.mainBalance}>${wallet?.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}</Text>
        </View>
    )
}