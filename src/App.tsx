import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { ScreenStack as AuthScreenStack } from './features/auth';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationNativeContainer>
        <AuthScreenStack />
      </NavigationNativeContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
