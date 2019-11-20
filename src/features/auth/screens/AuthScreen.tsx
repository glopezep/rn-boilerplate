import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { LogInStackParams } from '../types';

type Props = {
  navigation: NavigationProp<LogInStackParams, 'Auth'>;
  route: RouteProp<LogInStackParams, 'Auth'>;
};

function AuthScreen(props: Props) {
  return (
    <Container style={styles.container}>
      <Content
        style={{ flex: 1 }}
        padder
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.logoContainer}>
          <Text>Logo</Text>
        </View>
        <View>
          <Button
            block
            style={styles.button}
            onPress={() => props.navigation.navigate('SignUp')}>
            <Text>Sign up</Text>
          </Button>
          <Button
            block
            light
            onPress={() => props.navigation.navigate('SignIn')}>
            <Text>Log in</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AuthScreen;
