
import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: vh,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 50
    },
    bg:{
        height:"100%",
        width:"100%",
        position: "absolute",
    },
    tvsCont: {
        backgroundColor: "white",
        width: "90%",
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: "#6843A1",
        paddingVertical: 17,
    },
    tvType: {
       backgroundColor: "#f7f7f7",
       marginHorizontal: 10,
       marginVertical: 5,
       padding: 15,
       borderRadius: 10
    },
    tvName: {
        fontWeight: "bold",
        color: "#575757"
    },
    paymentText: {
        margin: 10,
        marginLeft: 25,
        fontSize: 18
    }
})

export default styles;