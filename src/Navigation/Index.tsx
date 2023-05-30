import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Colors, setHeight } from '../Components/Theme';
import { RootStackParamList, RootTabParamList } from './types';

import Home from '../Screen/App/Home/home';
import ReceiverDetails from '../Screen/App/ReceiverDetails/ReceiverDetails';
import Profile from '../Screen/App/Profile/profle';
import LoginSignupScreen from '../Screen/AuthPage/LogIn';
import OtpVerification from '../Screen/AuthPage/OtpVerification';
import { useAppSelector } from '../redux/App/hooks';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const authToken = useAppSelector(state => state.auth.userToken);
  console.log(authToken);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName='LoginSignupScreen'
      screenOptions={{
        headerShown: false,
      }}>
      {authToken === null ? (
        <>
          <Stack.Screen name='LoginSignupScreen' component={LoginSignupScreen} />
          <Stack.Screen name='OtpVerification' component={OtpVerification} />
        </>
      ) : (
        <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.buttonGreen,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Entypo name='home' size={setHeight(4)} color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Notification'
        component={ReceiverDetails}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='phone-square' size={setHeight(4)} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Entypo name='user' size={setHeight(4)} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
