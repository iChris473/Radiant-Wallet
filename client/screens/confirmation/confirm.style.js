import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    imgBg: {
        height: "100%",
        width: "100%"
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
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        minHeight: vh,
        marginTop: 10,
      },
      topBar: {
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
        backgroundColor: "white",
        opacity: 0.17,
        width: "100%",
        position: "absolute",
        top: 60,
        zIndex: -10,
      },
      mainCard: {
        zIndex: 1,
        marginTop: 10,
        width: "90%",
      },
      title: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "left",
        margin: 10,
        opacity: 0.7,
        fontFamily: 'BoldMontserrat'
      }, 
      messageCont: {
        marginTop: 20,
        backgroundColor: "#F6F6F6",
        borderRadius: 15,
        padding: 10
      },
      introText: {
        fontWeight: "600",
        marginVertical: 20,
        textAlign: "center",
      },
      mainCont: {
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderTopColor: "#828282",
        borderBottomColor: "#828282",
        paddingTop: 20,
        marginBottom: 20,
    },
    itemCont: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 37
    },
    descText: {
        fontWeight: "500",
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20
    },
    signContainer: {
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.46,
        marginVertical: 30
    },
    cancelBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f7f7f7",
        borderWidth: 1.5,
        borderColor: "#6843A1",
        borderRadius: 10,
        paddingVertical: 12,
        paddingLeft: 20,
        width: "50%",
        marginLeft: 10
    },
    cancelText: {
        opacity: .7,
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 5
    },
    pinBtn: {
        marginLeft: '25%',
        width: "50%",
        paddingVertical: 12,
        paddingHorizontal: 5,
        backgroundColor: "#6843A1",
        borderRadius: 10,
    },
    pinText: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        marginLeft: 5,
        textAlign: 'center'
    },
    qrcode: {
      width: '80%',
      height: 300,
      alignSelf: 'center'
    }
})

export default styles;