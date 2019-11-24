import * as React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {
  Container,
  Button,
  Text,
  Form,
  Item,
  Input,
  Content,
} from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { HomeStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<HomeStackParams, 'Profile'>;
  route: RouteProp<HomeStackParams, 'Profile'>;
};

function ProfileScreen(props: Props) {
  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
        <Text>Profile Screen</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProfileScreen;
