
import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
}

const styles = StyleSheet.create({

    backIcon: {
        position: "absolute",
        zIndex: 20,
        top: 0,
        left: 10
    },
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
        marginTop: vh * .05,

    },
    logoContainer: {
        alignContent: "center",
        justifyContent: "center",
        marginBottom: 45
    },
    logo: {
        alignSelf: 'center',
        width: 80,
        height: 80,
    },
    royalipay: {
        color: "green",
        // fontFamily: 'BoldMontserrat',
        fontSize: 17,
        fontWeight: 'bold'
    },
    signIn: {
        color: "#6843A1",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center"
    },
    inputContainer: {
        borderWidth: 1.5,
        borderColor: "#6843A1",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 40,
        // ...shadow,
    },
    input: {
        flex: 1,
        paddingVertical: 15,
    },
    forgot: {
        textAlign: 'right',
        // width: "90%",
        marginTop: 8,
        fontWeight: 'bold',
        color: '#565756'
    },
    button: {
        backgroundColor: '#6843A1',
        color: "white",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 70,
        marginTop: 20
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    curve: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 20,
        elevation: 4,
        zIndex: -10,
        position: 'absolute',
        bottom: -70,
    },
    regCurve: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 20,
        elevation: 4,
        zIndex: -10,
        position: 'absolute',
        bottom: -150,
    },
    cover: {
        position: 'absolute', 
        bottom: -50, 
        backgroundColor: 'white', 
        width: '100%',
        height: 20
    },
    regCover: {
        position: 'absolute', 
        bottom: -130, 
        backgroundColor: 'white', 
        width: '100%',
        height: 20
    },
    noAccountView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },
    noAccount: {
        fontWeight: "bold",
        fontSize: 15,
        marginRight: 5,
        color: "#565756"
    },
    signUp: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#0384fc"
    },
    orangeEllipse: {
        backgroundColor: "#FEF5E8",
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 50,
        bottom: 20,
        left: 10
    }

});

export default styles;