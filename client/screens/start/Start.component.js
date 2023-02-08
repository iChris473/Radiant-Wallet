
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import styles from "./start.style";
import kid1 from "../../assets/kid1.png";
import kid2 from "../../assets/kid2.png";
import kid3 from "../../assets/kid3.png";


export default function StartComponent({navigation}) {

    const [kid, setKid] = useState(kid1);
    const [counter, setCounter] = useState(1);
    
    useEffect(() => {

        setTimeout(() => {
            if(counter === 1){
                setKid(kid1)
                // setBaseColor("#FFB0F1")
                setCounter(2)
            } else if(counter === 2) {
                setKid(kid2)
                // setBaseColor("#90def0")
                setCounter(3)
            } else {
                setKid(kid3)
                // setBaseColor("#D4ABFF")
                setCounter(1)
            }
        }, 1000)

    }, [counter])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/logo1.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.royalipay}>Radiant Wallet</Text>
            </View>
            {/* PURPLE CURCLE */}
            <View style={styles.purpleCircle} />
            {/* kid */}
            <Image
                source={kid}
                resizeMode="contain"
                style={styles.kid}
            />
            <View style={styles.btnCont}>        
                <TouchableOpacity onPress={() => navigation.navigate("RegisterGuest")} style={[styles.billBtn, styles.imortBtn]}>
                        <Text style={[styles.signUpText, {color: 'black'}]}>Import Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Setup")} style={styles.billBtn}>
                        <Text style={styles.signUpText}>Create Wallet</Text>
                </TouchableOpacity>
            </View>
            {/* ORANGE ELLIPSE */}
            <View style={styles.orangeEllipse} />
        </View>
    )
}