import React, {useState} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';
import {useAppDispatch} from '../store/ReduxHooks';
import {saveUserDataToStorage} from '../store/AccountDataSlice';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useAppDispatch();
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
            dispatch(
              saveUserDataToStorage({
                email,
                firstName,
                lastName,
              }),
            );
          }
        }}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
