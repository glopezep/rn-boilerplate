import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Content } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { HomeStackParams } from '../../types';

interface Props {
  navigation: NavigationProp<HomeStackParams, 'Settings'>;
  route: RouteProp<HomeStackParams, 'Settings'>;
}

function SettingsScreen(props: Props) {
  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
        <Text>Settings Screen</Text>
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

export default SettingsScreen;
