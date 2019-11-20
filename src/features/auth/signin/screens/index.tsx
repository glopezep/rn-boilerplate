import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
          title: 'Sign in',
        }}
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
}

export default ScreenStack;
