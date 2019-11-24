import * as React from 'react'
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';

import InitialStepScreen from './InitialStepScreen';
import NameStepScreen from './NameStepScreen';
import BirthdayStepScreen from './BirthdayStepScreen';
import GenderStepScreen from './GenderStepScreen';
import PhoneNumberStepScreen from './PhoneNumberStepScreen';
import CreatePasswordStepScreen from './CreatePasswordStepScreen';
import FinishStepScreen from './FinishStepScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="InitialStepScreen"
      screenOptions={{
        title: 'Create account'
      }}
    >
      <Stack.Screen
        name="InitialStep"
        component={InitialStepScreen}
      />
      <Stack.Screen
        name="NameStep"
        component={NameStepScreen}
      />
      <Stack.Screen
        name="BirthdayStep"
        component={BirthdayStepScreen}
      />
      <Stack.Screen
        name="GenderStep"
        component={GenderStepScreen}
      />
      <Stack.Screen
        name="PhoneNumberStep"
        component={PhoneNumberStepScreen}
      />
      <Stack.Screen
        name="CreatePasswordStep"
        component={CreatePasswordStepScreen}
      />
      <Stack.Screen
        name="FinishStep"
        component={FinishStepScreen}
      />
    </Stack.Navigator>
  );
}