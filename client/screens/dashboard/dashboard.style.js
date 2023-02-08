import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    imgBg: {
        height: "100%",
        width: "100%",
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
    pressable: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: "#6A838C",
        opacity: .6,
        zIndex: 30
    },
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        minHeight: vh,
        marginBottom: 100,
    },
    topBar:{
        marginTop: 10,
        flexDirection: "row",
        width: "90%",
        alignContent: "center",
        justifyContent: "space-between",

    },
    topCurve: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        borderRadius: 100,
        height: 100,
        backgroundColor: 'white',
        opacity: .17,
        width: "100%",
        position: "absolute",
        top: 60,
        zIndex: -10
    },
    recentCurve: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        height: 100,
        backgroundColor: 'white',
        opacity: .17,
        width: "100%",
        position: "absolute",
        top: 50,
        zIndex: -10
    },
    mainCard: {
        zIndex: 1,
        // marginTop: 25,
        width: "90%"
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        margin: 10,
        opacity: .7
    },
    subCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 20,
        minHeight: 180
    },
    subCardTopBar: {
        
    },
    fundImgCont: {
        position: "absolute",
        right: 10, 
        top: 0,
    },
    fundWalletImg: {
        width: 120,
        height: 80,
        marginTop: 10,
        
    },
    walletContainer: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 25
    },
    walletImg: {
        width: 27,
        height: 27,
    },
    walletBlnce: {
        fontWeight: "bold",
        color: "#603F93",
        fontSize: 17,
        marginLeft: 8
    },
    mainBalance:{ 
        fontSize: 38,
        textAlign: "center",
        marginTop: 30,
        color: "#4b4b4b",
        fontWeight: '900'
        // fontFamily: "EBMontserrat"
    },
    createPin: {
        position: "absolute",
        bottom: 10,
        right: 20,
        fontWeight: "600",
        fontSize: 17,
        opacity: .7,
        // fontFamily: 'BoldMontserrat'
    },
    designParent: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -10,
        backgroundColor: "#E1E9FD",
        borderRadius: 20,

    },
    pinkLine1: {
        width: 140,
        height: 140, 
        borderRadius: 80,
        borderWidth: 1.5,
        borderColor: "#CF2BC7",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        opacity: .2,
        position: "absolute",
        top: 20,
        alignSelf: "center",
        transform: [{ rotate: '-15deg'}]
    },
    pinkLine2: {
        width: 160,
        height: 160, 
        borderRadius: 90,
        borderWidth: 1.5,
        borderColor: "#CF2BC7",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        opacity: .16,
        position: "absolute",
        alignSelf: "center",
        top: 10,
        transform: [{ rotate: '25deg'}]
    },
    pinkLine3: {
        width: 180,
        height: 180, 
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#CF2BC7",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        opacity: .11,
        position: "absolute",
        alignSelf: "center",
        transform: [{ rotate: '45deg'}]
    },
    blueEllipes1: {
        backgroundColor: "#2C60F3",
        width: 30,
        height: 30,
        borderRadius: 15,
        opacity: .5,
        position: "absolute",
        alignSelf: "center",
        top: 5
    },
    blueEllipes2: {
        backgroundColor: "#2C60F3",
        width: 20,
        height: 20,
        borderRadius: 10,
        opacity: .4,
        position: "absolute",
        bottom: 70,
        left: 20
    },
    pinkEllipes1: {
        backgroundColor: "#CF2BC7",
        width: 20,
        height: 20,
        borderRadius: 10,
        opacity: .3,
        position: "absolute",
        bottom: 40,
        left: 100
    },
    pinkEllipes2: {
        backgroundColor: "#CF2BC7",
        width: 18,
        height: 18,
        borderRadius: 9,
        opacity: .2,
        position: "absolute",
        bottom: 40,
        right: 10
    },
    serviceContainer: {
        marginTop: 20,
    },
    services: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "left",
        marginLeft: 10,
        opacity: .9
    },
    utilities: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    utilityBox: {
        alignItems: "center",
        justifyContent: "center",
    },
    servImgContainer: {
        width: 60, 
        height: 60,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 6.65,
        elevation: 9,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white'
    },
    serviceIcon: {
        width: 50, 
        height: 50,
    },
    serviceTitle: {
        fontWeight: "bold",
        fontSize: 13,
        textAlign: "center",
        marginTop: 10,
        opacity: .7,
    },
    recents: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "right",
        marginLeft: 10,
        margin: 20,
        opacity: .8,
    },
    recentsTransactions: {
        marginTop: 20,
        marginHorizontal: 10,
        
    },
    singleTransaction: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#AD6EAA",
        padding: 10,
        transImgCon: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 6.65,
        elevation: 9,
        backgroundColor: "white",
        marginBottom: 20
    },
    transDesc: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flex: 1
    },
    transImgCont: {
        backgroundColor: "#FEE1FD",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 30,
    },
    transImg: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 25
    },
    transTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    transDate: {
        fontWeight: "bold",
        fontSize: 15,
        opacity: .45
    },
    transID: {
        fontWeight: "600",
        fontSize: 15,
        color: '#249AC3',
    },
    transPrice: {
        backgroundColor: "#E2FFDF",
        padding: 7,
        borderRadius: 10
    },
    allServCont: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardIcons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    userIcon: {
        height: 30,
        width: 30
    }
})

export default styles;