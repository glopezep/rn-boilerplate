import * as React from 'react';
import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../profile/screens/ProfileScreen';
import SettingsScreen from '../settings/screens/SettingsScreen';
import HomeScreen from './IndexScreen';
import NotificationScreen from '../notification/screens/NotificationScreen';

const Stack = createBottomTabNavigator();

function getIconName (routeOptions: { name: string, focused: boolean }): string {
  const { name, focused } = routeOptions
  let iconName = ''

  switch (name) {
    case 'Index':
      iconName = 'home'
      break
    case 'Notification':
      iconName = 'bell'
      break
    case 'Profile':
      iconName = 'account'
      break
    case 'Settings':
      iconName = 'settings'
      break
    default:
      break;
  }

  return `${iconName}${focused ? '' : '-outline'}`
}

export default function TabNavigator() {

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={({ route  }) => {
        return {
          tabBarLabel: '',

          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Icon
                type="MaterialCommunityIcons"
                name={getIconName({ name: route.name, focused })}
                style={{
                  color,
                  marginTop: 8,
                  fontSize: 27,
                  fontWeight: 'light'
                }}
              />
            )
          }
        }
      }}
    >
      <Stack.Screen
        name="Index"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
