
// import { useCallback } from 'react';
import StackNavigator from "./StackNavigator";
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'EBMontserrat': require('./fonts/Montserrat/Montserrat-ExtraBold.ttf'),
  //   'RegMontserrat': require('./fonts/Montserrat/Montserrat-Regular.ttf'),
  //   'SemiBMontserrat': require('./fonts/Montserrat/Montserrat-Medium.ttf'),
  //   'BoldMontserrat': require('./fonts/Montserrat/Montserrat-Bold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
    
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }

  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;


  return (
    <AuthContextProvider>
      <StackNavigator />
    </AuthContextProvider>
  );
}
