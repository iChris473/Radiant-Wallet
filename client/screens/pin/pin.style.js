
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
    backIcon: {
        position: "absolute",
        zIndex: 20,
        top: vh * .05,
        left: 10
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
        marginTop: vh * .1,

    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        marginTop: 10
    },
    logo: {
        width: 17,
        height: 17,
        marginRight: 5
    },
    logoText: {
        color: "#6843A1",
        fontSize: 20,
        fontWeight: "bold"
    },
    ellipseContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 30
    },
    coverEllipse: {
        backgroundColor: "#9902b0",
        width: 16,
        height: 16,
        borderRadius: 50,
        marginRight: 20
    },
    ellipse: {
        borderWidth: 2,
        borderColor: "#9902b0",
        width: 16,
        height: 16,
        borderRadius: 50,
        marginRight: 20
    },
    inputContainer: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "90%"
    },
    group: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%"
    },
    inputCirle: {
        borderWidth: 1, 
        borderColor: "#6843A1",
        borderRadius: 50,
        backgroundColor: "white",
        height: 50, 
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    inputText: {
        color: "#9902b0",
        // fontWeight: "500",
        fontFamily: "RegMontserrat",
        fontSize: 40
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
        bottom: -50,
    },
    cover: {
        position: 'absolute', 
        bottom: -30, 
        backgroundColor: 'white', 
        width: '100%',
        height: 20
    },
    button: {
        backgroundColor: '#6843A1',
        color: "white",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 70,
        marginTop: 50,
        opacity: .4
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    skip: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#0384fc",
        marginTop: 15,
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


})

export default styles;