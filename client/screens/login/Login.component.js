
import { View, Image, Text, TextInput, TouchableOpacity, Keyboard, Pressable } from 'react-native';
import { useState } from 'react';
import EyeIcon from '../../svgs/EyeIcon';
import HideEyeIcon from '../../svgs/HideEyeIcon';
import UserIcon from '../../svgs/UserIcon';
import WhiteCurve from '../../svgs/WhiteCurve';
import styles from "./login.style";
import ArrowLeftIcon from '../../svgs/ArrowLeftIcon';

export default function LoginComponent({navigation}) {

    const [viewPass, setViewPass] = useState(true)

  return (
      <View style={styles.container}>
          <Pressable onPressIn={() => Keyboard.dismiss()} style={{position: "absolute", height: "100%", width: "100%"}}  />
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
              <Text style={styles.royalipay}>Royalipay</Text>
          </View>
          <Text style={styles.signIn}>Sign in</Text>
          {/* EMAIL OR PHONE NUMBER CONTAINER */}
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Email"
                placeholderTextColor="gray"
                style={styles.input}
            />
            <UserIcon />
          </View>
          {/* PASSWORD CONTAINER */}
          <View style={styles.inputContainer}>
              <TextInput
                  placeholder="Password"
                  placeholderTextColor="gray"
                  style={styles.input}
                  secureTextEntry={viewPass}
              />
              {
                  viewPass ?
                  <TouchableOpacity style={{zIndex: 5}} onPress={() => setViewPass(!viewPass)}>
                     <HideEyeIcon />
                  </TouchableOpacity> :
                  <TouchableOpacity style={{zIndex: 5}} onPress={() => setViewPass(!viewPass)}>
                      <EyeIcon /> 
                  </TouchableOpacity>
              }
          </View>
          {/* WHITE CURVE */}
          <TouchableOpacity style={{width: "90%"}} onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* PROCEED BUTTON */}
          <TouchableOpacity onPress={() => navigation.navigate("CreatePin")} style={styles.button}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
          <View style={styles.noAccountView}>  
            <Text style={styles.noAccount}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.signUp}>sign up</Text>
            </TouchableOpacity>
          </View>
          {/* ORANGE ELLIPSE */}
          <View style={styles.orangeEllipse} />
      </View>
  )
}