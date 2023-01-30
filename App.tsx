import React from 'react';
import { StatusBar, useColorScheme, View, Text, ActivityIndicator } from 'react-native';
import AppState from './src/AppState/AppState';
import { Colors } from './src/Components/Theme';
import { AuthContext } from './src/Constants/Context';

import Navigation from './src/Navigation/Index';
import Home from './src/Screen/App/Home/home';
import LogIn from './src/Screen/AuthPage/LogIn';
import OtpVerification from './src/Screen/AuthPage/OtpVerification';
import Accelerometer from './src/Sensors/Accelerometer';
import Gyroscope from './src/Sensors/Gyroscope';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const { State, Dispatchers } = AppState();

  if (State.isLoadingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#35B2E6' />
        <Text>Loading.....</Text>
      </View>
    );
  }

  return (
    <>
      {/* <Accelerometer />
      <Gyroscope /> */}
      {/* <LogIn /> */}
      {/* <OtpVerification /> */}
      <Home />
      {/* <NewApp /> */}
    </>
  );
};

export default App;
