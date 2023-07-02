import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {
  AuthActions,
  useAuthorizationDispatchProvider,
  useAuthorizationProvider,
} from '../store/AccountDataContext';

const HomeScreen = () => {
  const accountInfo = useAuthorizationProvider();
  const accountInfoDispatch = useAuthorizationDispatchProvider();
  return (
    <SafeAreaView>
      <Text>Welcome {accountInfo?.user?.firstName} </Text>
      <Button
        title="Logout"
        onPress={() => {
          accountInfoDispatch({type: AuthActions.DELETEUSER});
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
