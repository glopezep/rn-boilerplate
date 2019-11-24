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

import { SignInStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignInStackParams, 'SignIn'>;
  route: RouteProp<SignInStackParams, 'SignIn'>;
};

function SignInScreen(props: Props) {
  return (
    <Container style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image
          source={{
            uri:
              'https://images.vexels.com/media/users/3/171165/preview2/704edce3ddb45f2cf779f563e19739bb-underwater-flat-illustration-design.jpg',
          }}
          style={{ height: 320 }}
        />
      </TouchableWithoutFeedback>
      <Content
        padder
        contentContainerStyle={{ flex: 1 }}
        scrollEnabled={false}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Button
              block
              style={styles.button}
            >
              <Text>Sign in</Text>
            </Button>
            
            <Button block transparent>
              <Text>Forgot password?</Text>
            </Button>
          </Form>
          <View>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <Button
              block
              light
              style={styles.button}
              onPress={() => props.navigation.navigate('SignUp')}
            >
              <Text>Create new account</Text>
            </Button>
          </View>
        </View>
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

export default SignInScreen;
