
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/start/Start.js';
import SignupGuest from './screens/guest/SignupGuest.js';
import TvSubscription from './screens/tv/TvSubscription.js';
import Confirmation from './screens/confirmation/Confirmation.js';
import Dashboard from './screens/dashboard/Dashboard.js';
import Swap from './screens/tv/Swap.js';
import Setup from './screens/guest/Setup.js';
import AuthContext from './context/AuthContext.js';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

    const { loggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={loggedIn ? "Dashboard" : "Start"}
      >
        {
          loggedIn ? (
            <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="ConfirmPayment" component={Confirmation} />
              <Stack.Screen name="TvSubscription" component={TvSubscription} />
              <Stack.Screen name="Swap" component={Swap} />
            </>
          ) : (
            <>
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Setup" component={Setup} />
              <Stack.Screen name="RegisterGuest" component={SignupGuest} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;