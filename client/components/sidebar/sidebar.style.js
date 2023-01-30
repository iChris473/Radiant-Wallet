import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
        width: 260,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 6.65,
        elevation: 9,
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "100%",
        backgroundColor: 'white',
        position: "absolute",
        top: 55,
        zIndex: 50
    },
    profileCont: {
        width: "100%",
        borderTopRightRadius: "100%",
        borderBottomRightRadius: "100%",
        height: 140,
        alignItems: "center",
        justifyContent: "center"
    },
    profileImgCont: {
        width: 90,
        height: 90,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.41,
        shadowRadius: 6.65,
        borderRadius: 45,
        alignItems: "center",
        justifyContent: 'center'
    },
    profileImg: {
        width: 80,
        height: 80,
    },
    pinkLine1: {
        width: 100,
        height: 100, 
        borderRadius: 80,
        borderWidth: 1.5,
        borderColor: "#CF2BC7",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        opacity: .2,
        position: "absolute",
        top: 20,
        alignSelf: "center",
        transform: [{ rotate: '-20deg'}]
    },
    pinkLine2: {
        width: 100,
        height: 100, 
        borderRadius: 90,
        borderWidth: 1.5,
        borderColor: "#CF2BC7",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
        opacity: .16,
        position: "absolute",
        alignSelf: "center",
        top: 20,
        // transform: [{ rotate: '15deg'}]
    },
    blueEllipes1: {
        backgroundColor: "#2C60F3",
        width: 8,
        height: 8,
        opacity: .3,
        borderRadius: 9,
        position: "absolute",
        alignSelf: "center",
        top: 40,
        left: 50
    },
    
    pinkEllipes1: {
        backgroundColor: "#CF2BC7",
        width: 12,
        height: 12,
        borderRadius: 6,
        opacity: .7,
        position: "absolute",
        bottom: 20,
        left: 70
    },
    purpleEllipse: {
        backgroundColor: "#2344BC",
        width: 6,
        height: 6,
        borderRadius: 3,
        position: "absolute",
        top: 80,
        right: 50
    },
    pencil: {
        position: "absolute",
        bottom: 20,
        right: 80,
        backgroundColor: "white",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.41,
        shadowRadius: 6.65,
    },
    fullName: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 22,
        opacity: .9
    },
    email: {
        textAlign: "center",
        fontSize: 15,
        opacity: .4
    },
    optionsCont: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        marginBottom: 20,
        justifyContent: "flex-start"
    },
    iconCont: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    icons: {
        width: 20,
        height: 20,
    },
    optionText: {
        fontWeight: "bold",
        opacity: .8,
        fontSize: 16,
        marginLeft: 10
    },
    termCont: {
        marginBottom: 150,
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    terms: {
        fontWeight: "600",
        fontSize: 17,
        color: '#249AC3',
        opacity: .7
    },
    logout: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 4
    }
})

export default styles;