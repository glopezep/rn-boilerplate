import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './IndexScreen';
import SignInStack from '../signin/screens';
import SignUpStack from '../signup/screens';

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="SignIn" component={SignInStack} />
      <Stack.Screen name="SignUp" component={SignUpStack} />
    </Stack.Navigator>
  );
}

export default ScreenStack;
