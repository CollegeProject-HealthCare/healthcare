import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext, ctx } from '../Constants/Context';
import SpalashScreen from '../Screen/SpalashScreen/SpalashScreen';
import LogIn from '../Screen/AuthPage/LogIn';
import home from '../Screen/App/Home/home';

//Screens

const Stack = createStackNavigator();

/**
 * Screens For Authentications
 */
const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login' screenOptions={{ header: () => null }}>
    <Stack.Screen name='LoginIn' component={LogIn} options={{ header: () => null }} />
  </Stack.Navigator>
);

// const AppPage = createStackNavigator();

const AppPage = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
    <Stack.Screen name='Home' component={home} />
  </Stack.Navigator>
);
export default function Navigation() {
  const { State } = useContext<ctx>(AuthContext);

  return (
    <NavigationContainer>
      {State.isLoadingComplete === true ? (
        <SpalashScreen />
      ) : State.userToken === null ? (
        <AuthStack />
      ) : (
        <AppPage />
      )}
    </NavigationContainer>
  );
}
