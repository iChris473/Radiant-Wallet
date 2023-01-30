
import { StyleSheet, Dimensions } from 'react-native';
import tvStyles from "../tv/tv.style"

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ...tvStyles,
  vtuImgCont: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  vtuImg: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 6
  },
  numberCont: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingBottom: 10
  },
  mobileNo: {
    fontSize: 25,
    fontFamily: 'SemiBMontserrat',
    letterSpacing: 1.5,
    marginLeft: 15,
    flex: 1
  },
  phoneNoCont:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topupCont: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    padding: 20
  },
  topupText: {
    fontSize: 16,
    fontWeight: '500'
  },
  toprows: {

  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    width: 95,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'SemiBMontserrat',
    letterSpacing: 1,
  },
  customAmnt: {
    borderBottomWidth: .7,
    paddingVertical: 10,
    fontSize: 22,
    fontFamily: 'SemiBMontserrat',
    letterSpacing: 1,
    opacity: .7
  },
  networkCont: {
    position: "absolute",
    backgroundColor: 'white',
    top: vh * .27,
    left: 20,
    zIndex: 2,
    padding: 10,
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#7654ab',
    width: 140,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  netPic: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10
  },
  netOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  netName: {
    fontWeight: '600',
    fontSize: 15,
    opacity: .7
  },
  shownetworks: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  }

});

export default styles;