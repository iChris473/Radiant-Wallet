
import { StyleSheet, Dimensions } from 'react-native';

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
        marginBottom: 45,
        marginTop: 10,
    },
    logo: {
        alignSelf: 'center',
        width: 60,
        height: 60,
    },
    royalipay: {
        color: "green",
        // fontFamily: 'BoldMontserrat',
        fontSize: 17,
        fontWeight: 'bold'
    },
    purpleCircle: {
        backgroundColor: "#EFE5FF",
        position: "absolute",
        zIndex: -10,
        top: 100,
        width: 260,
        height: 260,
        borderRadius: 130
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
        position: 'absolute',
        bottom: "20%",
        zIndex: 5,
        width: "100%",
    },
    curve1: {
        backgroundColor: "white",
        position: 'absolute',
        bottom: "-50%",
        zIndex: 5.1,
        height: vh,
        width: "100%"
    },
    cover: {
        position: 'absolute', 
        bottom: -60, 
        backgroundColor: 'white', 
        width: '100%',
        height: 20,
        zIndex: 5,
    },  
    kid: {
        width: 220,
        height: 220,
        marginTop: 30
    },
    greyCircle: {
        backgroundColor: "#f2f2f2",
        position: "absolute",
        zIndex: 3,
        bottom: 50,
        width: 260,
        height: 260,
        borderRadius: 150
    },
    coloredCircle: {
        position: "absolute",
        zIndex: 4,
        bottom: 30,
        width: 260,
        height: 260,
        borderRadius: 130
    },
    signContainer: {
        flexDirection: "row",
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10.46,
        elevation: 4,
        zIndex: 10,
        marginTop: 90
    },
    signUpBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f7f7f7",
        borderWidth: 1.5,
        borderColor: "#6843A1",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 5,
        width: "50%",
        marginLeft: 10
    },
    signUpText: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 5,
        color: 'white'
    },
    signInBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 10,
        width: "50%",
        height: "100%",
        bottom: 0,
        paddingVertical: 12,
        paddingHorizontal: 5,
        backgroundColor: "#6843A1",
        borderRadius: 10,
    },
    signInText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 5
    },
    billBtn: {
        marginTop: 10,
        alignSelf: 'center',
        width: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6843A1",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 5,
        zIndex: 10,
    },
    orangeEllipse: {
        backgroundColor: "#FEF5E8",
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 50,
        bottom: 20,
        left: 10,
        zIndex: 10
    },
    btnCont: {
        width: '100%',
        position: 'absolute',
        bottom: '20%'
    },
    imortBtn: {
        backgroundColor: 'white',
        borderColor: "#6843A1",
        borderWidth: 1
    }

})

export default styles;