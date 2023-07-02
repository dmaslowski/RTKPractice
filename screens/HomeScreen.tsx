import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

import {saveUserDataToStorage, selectUser} from '../store/AccountDataSlice';
import {useAppDispatch, useAppSelector} from '../store/ReduxHooks';

const HomeScreen = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <Text>Welcome {user?.firstName} </Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(saveUserDataToStorage(undefined));
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
