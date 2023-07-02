/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import RootNavigator from './navigation/RootNavigatior';
import {Provider} from 'react-redux';
import {reduxStore} from './store/ReduxStore';

//TODO: Add Redux + RDK
//TODO: Connect to spotifies api
//TODO: Set up async storage
//TODO: Bridging Code
//TODO: https://reactnative.dev/docs/native-modules-intro
//TODO: Add Better Login screen UI
//TODO: Better HomeScreen UI

function App(): JSX.Element {
  return (
    <Provider store={reduxStore}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
