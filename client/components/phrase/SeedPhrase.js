import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Clipboard from 'expo-clipboard';
import XIcon from '../../svgs/XIcon';

export default function SeedPhrase({setShowPhrase}) {
    
    const [copied, setCopied] = React.useState(false);

    const copyAddress = async () => {
        await Clipboard.setStringAsync('Write down or copy these words in the right order and save them somewhere safe');
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => setShowPhrase(false)} style={styles.xicon}>
            <XIcon />
          </TouchableOpacity>
          <View style={styles.secretDesc}>
              <Text style={styles.secret1}>Your Secret Phrase</Text>
              <Text style={styles.secret2}>Write down or copy these words in the right order and save them somewhere safe.</Text>
          </View>
          <View style={styles.phrases}>
              {
                  ('Write down or copy these words in the right order and save them somewhere safe')
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
      </View>
  )
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height + 30, 
        width,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 9999
    },
    xicon: {
        position: 'absolute',
        top: 60,
        right: 15
    },
    phrases: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    phrasec: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderColor: 'lightgrey'
    },
    iphrase: {
        opacity: .5,
        marginRight: 3,
        fontSize: 15
    },
    phrase: {
        fontSize: 15
    },
    copy: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#0384fc",
        marginTop: 30
    },
    secretDesc: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        width: "95%",
    },
    secretText1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    secret1: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    secret2: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16
    },
})