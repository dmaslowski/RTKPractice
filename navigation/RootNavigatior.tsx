import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../constants/navigationConstants';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useAuthorizationProvider} from '../store/AuthorizationContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
};

const RootNavigator = () => {
  const user = useAuthorizationProvider();
  const hasUser = user?.firstName !== '';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          hasUser ? NavigationKeys.HomeScreen : NavigationKeys.LoginScreen
        }>
        <Stack.Screen
          name={NavigationKeys.LoginScreen}
          component={LoginScreen}
        />
        <Stack.Screen name={NavigationKeys.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
