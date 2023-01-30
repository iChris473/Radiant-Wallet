
import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: "#F1F1F1",
        borderTopColor: 'transparent',
        height: 50,
        paddingTop: 10,
        zIndex: 40
    }
});

export default styles;
