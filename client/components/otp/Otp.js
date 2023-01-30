
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import styles from "./otp.style";
import MainboxComponent from './Mainbox.component';

export default function Otp({navigation}) {

    const [code, setCode] = useState("");

    const opacity = (code.length === 6) ? true : false;

    const [seconds, setSeconds] = useState(30)

    useEffect(() => {

        if(seconds <= 0) return

        const interval = setInterval(() => setSeconds(seconds-1), 1000)
        
        return () => clearInterval(interval);


    }, [seconds])
    
  return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image
                  source={require("../../assets/logo1.png")}
                  resizeMode="contain"
                  style={styles.logo}
              />
              <Text style={styles.royalipay}>Royalipay</Text>
          </View>
          <View style={{width: "100%", padding: 10, paddingLeft: 20}}>
            <Text style={styles.verify}>Verify your number</Text>          
            <Text style={styles.info1}>Type in the 6 digit OTP code that was sent to you</Text>          
            <Text style={styles.number}>0913454917</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.wrong}>Wrong Number?</Text>
                <TouchableOpacity>
                    <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
            </View>          
            {/* TEXT INPUTS */}
            <MainboxComponent code={code} setCode={setCode} />
            {/* RESEND CODE */}
            <View style={styles.resendCont}>
                <Text style={styles.timer}>{seconds} secs</Text>
                <TouchableOpacity disabled={seconds}>
                    <Text style={[styles.resend, !seconds && {opacity: 1, color: 'green'}]}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
          </View>
          {/* PROCEED BUTTON */}
          <TouchableOpacity 
                disabled={!opacity} 
                style={{...styles.button, opacity: opacity ? 1 : .6, width: "90%"}}
                onPress={() => navigation.navigate("Dashboard")}
            >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login}>Back to log in</Text>
          </TouchableOpacity>
          {/* ORANGE ELLIPSE */}
          <View style={styles.orangeEllipse} />
      </View>
  )
}