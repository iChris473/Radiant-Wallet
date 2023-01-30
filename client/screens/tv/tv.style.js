
import { StyleSheet, Dimensions } from 'react-native';

var vh = Dimensions.get('window').height;

const styles = StyleSheet.create({

  blueSemiCirlce: {
    opacity: 0.1,
    width: 300,
    height: 300,
    borderWidth: 55,
    borderColor: "#eda1ff",
    borderRadius: 150,
    position: "absolute",
    top: -200,
    alignSelf: "center",
  },
  backIcon: {
    position: "absolute",
    zIndex: 20,
    top: 15,
    left: 10,
  },
  imgBg: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    height: '100%',
    marginVertical: 10,
    // marginBottom: 40
  },
  topBar: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
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
    marginTop: 25,
    width: "90%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    alignSelf: 'flex-start',
    marginTop: 35,
    marginLeft: 20,
    opacity: 0.7,
  },
  servicesCont: {
    marginTop: 30,
    width: '90%'
  },
  boxCont: {
    borderWidth: 1,
    borderColor: "#6843A1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 12,
    marginBottom: 35,
    shadowColor: "#000000",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  selectedCont: {
    flex:1,
    flexDirection: 'row',
  },
  styleText: {
    fontSize: 15,
    padding: 15,
    flex: 1,
    // color: "grey"
  },
  serviceInput: {
    flex: 1,
    padding: 15,
    borderRadius: 11,
  },
  button: {
    backgroundColor: '#7654ab',
    color: "white",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 70,
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
 },
 btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
 },
 tvsCont: {
     position: "absolute",
     backgroundColor: "white",
     borderWidth: 1.5,
     borderRadius: 20,
     borderColor: "#6843A1",
     bottom: 0,
     top: vh * .15,
     left: 0,
     right: 0,
     paddingVertical: 5,
     zIndex: 999
 },
 tvType: {
    backgroundColor: "#f7f7f7",
    margin: 10,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row'
 },
 bottomCont: {
  position: "absolute",
  backgroundColor: "#fafafa",
  borderColor: "#d9d9d9",
  borderWidth: .3,
  // top: vh * .3,
  bottom: 0,
  right: 0, 
  left: 0,
  borderTopRightRadius: 25,
  borderTopLeftRadius: 25,
 },
 bottomLine: {
   width: 50,
   height: 4,
   backgroundColor: "grey",
   borderRadius: 50,
   alignSelf: "center",
   marginVertical: 10
 },
 backDrop: {
  backgroundColor: 'black',
  opacity: .35,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  position: 'absolute',
  zIndex: 222,
 },
 xIcon: {
  alignSelf: 'flex-end',
  margin: 5
 },
 placeholder: {
  margin: 3,
  opacity: .7
 },
 biller: {
  fontSize: 16,
  fontWeight: 'bold',
  alignSelf: 'center',
  marginBottom: 5
 },
 serviceIcon: {
  width: 40, 
  height: 40,
  borderRadius: 5
},
tvServiceTexts: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginLeft: 10
},
selectedTvServiceTexts: {
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginLeft: 7
},
tvName: {
  fontSize: 17
},
tvDesc: {
  fontSize: 14,
  marginTop: 4,
  opacity: .65
},
tvsearchCont: {
  backgroundColor: '#f5f5f5',
  marginVertical: 10,
  alignSelf: 'center',
  padding: 12,
  borderRadius: 10,
  flexDirection: 'row',
  width: '90%'
},
searchBiller: {
  flex: 1,
  marginLeft: 5
}, 
selectserviceIcon: {
  width: 30,
  height: 30,
  borderRadius: 5,
  margin: 5
},
payItemCont: {
  marginVertical: 10,
  alignSelf: 'center',
  width: '90%',
},
payCont: {
  borderBottomWidth: 1,
  borderBottomColor: '#e6e6e6',
  paddingBottom: 8,
  marginBottom: 20
}

});

export default styles;