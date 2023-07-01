import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';
import {RootStackParamList} from '../navigation/RootNavigatior';
import {NavigationKeys} from '../constants/navigationConstants';

import {
  AuthActions,
  useAuthorizationDispatchProvider,
} from '../store/AuthorizationContext';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationKeys.LoginScreen
>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const authDispatch = useAuthorizationDispatchProvider();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', gap: 10}}>
      <TextInput
        style={{backgroundColor: 'grey'}}
        onChangeText={newText => {
          setEmail(newText);
        }}
        value={email}
      />
      <TextInput
        style={{backgroundColor: 'grey'}}
        onChangeText={newText => {
          setFirstName(newText);
        }}
        value={firstName}
      />
      <TextInput
        style={{backgroundColor: 'grey'}}
        onChangeText={newText => {
          setLastName(newText);
        }}
        value={lastName}
      />
      <Button
        title="Login"
        onPress={() => {
          if (email !== '' && firstName !== '' && lastName !== '') {
            if (authDispatch) {
              authDispatch({
                type: AuthActions.LOGIN,
                payload: {
                  email,
                  firstName,
                  lastName,
                },
              });
            }
            navigation.navigate(NavigationKeys.HomeScreen);
          }
        }}
      />
      <Button
        title="Skip"
        onPress={() => {
          navigation.navigate(NavigationKeys.HomeScreen);
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
