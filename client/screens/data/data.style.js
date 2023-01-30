
import { StyleSheet, Dimensions } from 'react-native';
import airtimeStyles from "../airtime/airtime.style"

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ...airtimeStyles,
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 1,
  },
  bundleTitle: {
    fontSize: 18,
    fontWeight: '600',
    opacity: .5
  },
  activeBundle: {
    opacity: 1,
    color: '#7654ab',
    fontWeight: '800'
  },
  row: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  price: {
    borderWidth: 1.5,
    borderColor: '#7654ab',
    borderRadius: 10,
    width: '45%',
    height: 120,
    alignItems: 'center',
    marginTop: 20
  },
  bundleInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'SemiBMontserrat',
    letterSpacing: 1,
  },
  dataSize: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'BoldMontserrat',
  },
  dataInfo: {
    fontSize: 17,
    letterSpacing: 1,
    marginTop: 2
  },
  cahsback: {
    backgroundColor: '#7654ab',
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    padding: 2,
    marginBottom: 5
  },
  cahsbackText: {
    textAlign: 'center',
    color: 'white'
  },
  talkTime: {
    backgroundColor: '#f6f0ff',
    width: "100%",
    padding: 3,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  talkTimeTxt: {
    textAlign: 'center',
    fontSize: 13,
    opacity: .6
  }
});

export default styles;