

import { View, TextInput, Pressable, Keyboard } from 'react-native';
import React from 'react';
import styles from "./otp.style";


export default function MainboxComponent({maxDigit, code, setCode}) {

    const activeBorder = { borderWidth: 2, borderColor: "#6843A1" };

    const boxArray = new Array(maxDigit || 6).fill();

    const mainKeyboard = React.useRef();

    const handleCode = e => {
        setCode(e)
        if((e.length === (maxDigit || 6))){
            Keyboard.dismiss()
        }
    }

  return (
      <View style={styles.allInputs}>
          <TextInput
              maxLength={maxDigit || 6}
              onChangeText={handleCode}
              style={styles.hiddenInput}
              keyboardType="number-pad"
              ref={mainKeyboard}
              autoFocus={true}
          />
          {/* MAP BOXES ACCORDING TO NUMBER OF DIGITS */}
          {
              boxArray.map((_, index) => (
                  <Pressable key={index} style={[styles.inputCont, ((index === code.length) || (index === 5 &&code.length === 6 )) && activeBorder]}>
                      <TextInput
                          style={styles.input}
                          keyboardType="number-pad"
                          maxLength={1}
                          editable={false}
                          value={code[index] || ""}
                          onPressIn={() => mainKeyboard.current?.focus()}
                      />
                  </Pressable>
              ))
          }
      </View>
  )
}