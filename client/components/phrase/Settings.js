import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import React from 'react';
import * as Clipboard from 'expo-clipboard';
import XIcon from '../../svgs/XIcon';
import { TextInput } from 'react-native-gesture-handler';
import AuthContext from '../../context/AuthContext';
import { request } from '../../axios';

export default function Settings({setShowPhrase}) {
    
    const [copied, setCopied] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(true);

    const [mnemonic, setMnemonic] = React.useState('');

    const { setLoggedIn } = React.useContext(AuthContext);

    React.useEffect(() => {
        
        const createWalletFunction = async () => {
            try {
                const res = await request.get('/wallet');
                setMnemonic(res?.data?.mnemonic);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }

        createWalletFunction();

    }, []);

    const copyAddress = async () => {
        
        await Clipboard.setStringAsync(mnemonic);

        setCopied(true);
    
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    
    }

    const signout = () => {

        Alert.alert('Confirm Sign out', 'Your wallet will be deleted from this device', [

          {
            text: 'Cancel',
            onPress: () => { },
            style: 'cancel',
          },

          {text: 'OK', onPress: async () => {

            setIsLoading(true);
            
            try {
                await request.get('/logout');
    
                setIsLoading(false);
    
                setLoggedIn(false);
    
            } catch (error) {
    
                setIsLoading(false);
    
                Alert.alert(error?.response?.data || 'Error signing out');
    
            }

          }},

        ]);

    }

  return (
      <View style={styles.container}>
          {isLoading && 
          <View style={styles.loading}>
              <ActivityIndicator size="large" color="#6843A1" />
          </View>
          }
          <TouchableOpacity onPress={signout} style={styles.signout}>
            <Text style={styles.signoutText}>Sign out of wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowPhrase(false)} style={styles.xicon}>
            <XIcon />
          </TouchableOpacity>
          <View style={styles.secretDesc}>
              <Text style={styles.secret1}>Your Secret Phrase</Text>
              <Text style={styles.secret2}>Write down or copy these words in the right order and save them somewhere safe.</Text>
          </View>
          <View style={styles.phrases}>
              {
                  (mnemonic)
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
    loading: {
        position: 'absolute',
        height, 
        width,
        backgroundColor: 'rgba(255,255,255,.8)',
        flex: 1,
        justifyContent: 'center',
        zIndex: 999
      },
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
    signout: {
        position: 'absolute',
        top: 75,
        left: 15
    },
    signoutText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 17
    }
})