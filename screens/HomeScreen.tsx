import React from 'react';
import {Text} from 'react-native';
import {useAuthorizationProvider} from '../store/AuthorizationContext';

const HomeScreen = () => {
  const user = useAuthorizationProvider();
  return <Text>Welcome {user?.firstName} </Text>;
};

export default HomeScreen;
