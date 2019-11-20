import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../screens/AuthScreen';
import SignInStack from '../signin/screens';
import SignUpStack from '../signup/screens';

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInStack} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default ScreenStack;
