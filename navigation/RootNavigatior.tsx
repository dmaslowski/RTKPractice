import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../constants/navigationConstants';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useAuthorizationProvider} from '../store/AccountDataContext';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
};

const RootNavigator = () => {
  const accountData = useAuthorizationProvider();
  const hasUser = accountData?.user !== undefined;

  if (accountData?.isHydrating) {
    return <OnboardingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {hasUser ? (
          <Stack.Screen
            name={NavigationKeys.HomeScreen}
            component={HomeScreen}
          />
        ) : (
          <Stack.Screen
            name={NavigationKeys.LoginScreen}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
