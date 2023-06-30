/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';

//TODO: Set up fake account with a useReducer and account content
//TODO: Move this view to it's own component
//TODO: Set up react navigation
//TODO: Input Login With text view
//TODO: Add Redux + RDK
//TODO: Connect to spotifies api
//TODO: Set up async storage
//TODO: Bridging Code
//TODO: https://reactnative.dev/docs/native-modules-intro

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title="Login" />
      <Button title="See shows in chicago" />
    </SafeAreaView>
  );
}

export default App;
