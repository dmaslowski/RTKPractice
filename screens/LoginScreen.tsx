import React, {useState} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';

import {
  AuthActions,
  useAuthorizationDispatchProvider,
} from '../store/AccountDataContext';

const LoginScreen = () => {
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
            authDispatch({
              type: AuthActions.CREATEUSER,
              payload: {
                email,
                firstName,
                lastName,
              },
            });
          }
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
