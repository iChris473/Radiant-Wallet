
import { StyleSheet, Dimensions } from 'react-native';
import loginStyles from '../login/login.style';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    ...loginStyles,

    info1: {
        color: "#3d3d3d",
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center"
    },
    login: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#0384fc",
    },
    loginContainer: {
        position: "absolute",
        bottom: 120
    },
    phoneNumber: {
        flex: 1,
        paddingVertical: 15,
        fontSize: 22,
        height: "100%",
        fontWeight: "600",
        color: "#3d3d3d",
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
    inputContainer: {
        borderWidth: 1.5,
        borderColor: "#6843A1",
        borderRadius: 10,
        width: "92%",
        paddingHorizontal: 10,
        marginTop: 10,
        // ...shadow,
    },
    button: {
        backgroundColor: '#6843A1',
        color: "white",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 70,
        marginTop: 100
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
    warningC: {
        backgroundColor: '#fceded',
        padding: 15,
        borderRadius: 10,
        width: '95%',
        marginTop: 50,
    },
    warning1: {
        fontWeight: '500',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 15
    },
    warning2: {
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#6843A1',
        color: "white",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 70,
        marginTop: 15,
        marginBottom: 50
    },
})

export default styles;