
import { StyleSheet, Dimensions } from 'react-native';
import loginStyles from '../../screens/login/login.style';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    blueSemiCirlce: {
        opacity: .1,
        width: 300,
        height: 300,
        borderWidth: 55,
        borderColor: "#eda1ff",
        borderRadius: 150,
        position: "absolute",
        top: -200,
        alignSelf: "center"
    },
    KeyboardWrapper: {
        flex: 1
    },
    imgBg: {
        height: "100%",
        width: "100%"
    },
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        minHeight: vh,
        marginTop: 40,
    },
    logoContainer: {
        alignContent: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        marginTop: 40
    },
    logo: {
        width: 90,
        height: 90,
    },
    royalipay: {
        color: "#24014B",
        fontWeight: "bold",
        fontSize: 20,
        height: 20,
        marginTop: 56,
        opacity: .3,
        textAlign: "center",
        justifyContent: "center"
    },
    verify: {
        fontSize: 24,
        textAlign: "left",
        fontFamily: "EBMontserrat",
        opacity: .65
    },
    info1: {
        marginTop: 10,
        fontSize: 17,
    },
    number: {
        fontSize: 30,
        marginVertical: 20,
        fontFamily: "SemiBMontserrat",
        color: "#6843A1"
    },
    wrong: {
        fontWeight: "bold",
        fontSize: 19,
        opacity: .4
    },
    change: {
        fontWeight: "bold",
        fontSize: 19,
        color: "green",
        marginLeft: 8
    },
    allInputs: {
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputCont: {
        borderWidth: 1,
        // borderColor: "#6843A1",
        borderColor: "#908D93",
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"   
    },
    input: {
        height: 50,
        width: 50,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 25,
        fontFamily: "RegMontserrat"
    },
    hiddenInput: {
        opacity: 0,
        width: 1,
        height: 1,
        position: 'absolute'
    },
    resendCont: {
        flexDirection: "row",
        justifyContent: "space-between",   
    },
    timer: {
        fontSize: 18,
        fontFamily: "RegMontserrat"
    },
    resend: {
        fontSize: 18,
        fontFamily: "SemiBMontserrat",
        opacity: .3
    },
    loginContainer: {
        position: "absolute",
        bottom: 80,
        alignSelf: "center"
    },
    login: {
        color: "#6843A1",
        fontSize: 16
    },
    button: {
        margin: 20,
        marginTop: 60,
        backgroundColor: "#6843A1",
        padding: 20,
        borderRadius: 6
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 17
    }
})

export default styles;