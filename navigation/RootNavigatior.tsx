import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {NavigationKeys} from '../constants/navigationConstants';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useAppDispatch, useAppSelector} from '../store/ReduxHooks';
import {hydrateUserData, selectUser} from '../store/AccountDataSlice';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
};

const RootNavigator = () => {
  // const accountData = useAuthorizationProvider();
  // const hasUser = accountData?.user !== undefined;
  const dispatch = useAppDispatch();

  const userStatus = useAppSelector(state => state.accountData.status);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (userStatus === 'idle') {
      console.log(userStatus);
      dispatch(hydrateUserData());
    }
  }, [userStatus, dispatch]);

  if (userStatus === 'loading') {
    return <OnboardingScreen />;
  }
  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userStatus === 'hydrated' && user !== undefined ? (
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
