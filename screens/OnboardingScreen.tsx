import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

const OnboardingScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'teal',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
      }}>
      <ActivityIndicator animating={true} />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
