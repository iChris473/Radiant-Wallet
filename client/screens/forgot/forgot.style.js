
import { StyleSheet, Dimensions } from 'react-native';
import loginStyles from '../login/login.style';

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
    
    ...loginStyles,

    info1: {
        color: "#3d3d3d",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    info2: {
        color: "#3d3d3d",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center",
        margin: 10
    },
    login: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#0384fc",
    },
    loginContainer: {
        position: "absolute",
        bottom: 100
    }
})

export default styles;