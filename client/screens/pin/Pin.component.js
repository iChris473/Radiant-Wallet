import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from "./pin.style"
import XIcon from '../../svgs/XIcon';
import Backspace from '../../svgs/BackSpace';
import WhiteCurve from '../../svgs/WhiteCurve';


export default function Pin({navigation, mode}) {
      
    const [pinArray, setPinArray] = useState([])

    const [lowOpacity, setLowOpacity] = useState(false)

    const inputStyle = [styles.inputCirle, lowOpacity && {opacity: .4}]

    const addPin = (num) => {

        if(pinArray.length === 4) return
        
        if(pinArray.length === 3){
            setLowOpacity(true)
        }

        setPinArray(pinArray.concat(num))

    }

    const emptyPin = () => {
        setPinArray([])
        setLowOpacity(false)
    }

    const deletePin = () => {
        setPinArray(pinArray.slice(0, -1))
        setLowOpacity(false)
    }

    const handleButton = () => {
        
        if(!lowOpacity) return

        if(mode === "Create Pin"){
            navigation.navigate("ConfirmPin")
            emptyPin()
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/lock.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.logoText}>{mode}</Text>
            </View>
            {/* PURPLE ELLIPSE */}
            <View style={styles.ellipseContainer}>
                <View style={pinArray[0] ? styles.coverEllipse : styles.ellipse} />
                <View style={pinArray[1] ? styles.coverEllipse : styles.ellipse} />
                <View style={pinArray[2] ? styles.coverEllipse : styles.ellipse} />
                <View style={[pinArray[3] ? styles.coverEllipse : styles.ellipse, { marginRight: 0 } ] } />
            </View>
            {/* INPUT FIELDS */}
            <View style={styles.inputContainer}>
                {/* 1 - 3 */}
                <View style={styles.group}>
                    <TouchableOpacity onPress={addPin.bind(null, 1)} style={inputStyle}>
                        <Text style={styles.inputText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 2)} style={inputStyle}>
                        <Text style={styles.inputText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 3)} style={inputStyle}>
                        <Text style={styles.inputText}>3</Text>
                    </TouchableOpacity>
                </View>
                {/* 4 - 6 */}
                <View style={styles.group}>
                    <TouchableOpacity onPress={addPin.bind(null, 4)} style={inputStyle}>
                        <Text style={styles.inputText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 5)} style={inputStyle}>
                        <Text style={styles.inputText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 6)} style={inputStyle}>
                        <Text style={styles.inputText}>6</Text>
                    </TouchableOpacity>
                </View>
                {/* 7 - 9 */}
                <View style={styles.group}>
                    <TouchableOpacity onPress={addPin.bind(null, 7)} style={inputStyle}>
                        <Text style={styles.inputText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 8)} style={inputStyle}>
                        <Text style={styles.inputText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(null, 9)} style={inputStyle}>
                        <Text style={styles.inputText}>9</Text>
                    </TouchableOpacity>
                </View>
                {/* X, 0, Del */}
                <View style={styles.group}>
                    <TouchableOpacity onPress={emptyPin} style={{ ...styles.inputCirle, padding: 5 }}>
                        <XIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addPin.bind(0)} style={inputStyle}>
                        <Text style={styles.inputText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deletePin} style={{ ...styles.inputCirle, padding: 5 }}>
                        <Backspace />
                    </TouchableOpacity>
                </View>
            </View>
            {/* WHITECURVE */}
            
            {/* PROCEED BUTTON */}
            <TouchableOpacity onPress={handleButton} style={[styles.button,  lowOpacity && {opacity: 1} ]}>
                <Text style={styles.btnText}>Proceed</Text>
            </TouchableOpacity>
            {mode !== "Enter Pin" && <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>}
            {/* ORANGE ELLIPSE */}
            <View style={styles.orangeEllipse} />
        </View>
    )
}