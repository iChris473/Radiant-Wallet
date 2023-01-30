
import { StyleSheet, Dimensions } from 'react-native';
import tvStyles from "../tv/tv.style"

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ...tvStyles
});

export default styles;