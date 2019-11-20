import * as React from 'react';
import { Form, Item, Input, Content, Container, Button, Text } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'PhoneNumberStep'>;
  route: RouteProp<SignUpStackParams, 'PhoneNumberStep'>;
};

const { Step } = sharedComponents;

function PhoneNumberStep(props: Props) {
  return (
    <Container>
      <Content
        padder
        scrollEnabled={false}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Step title="What is your Phone Number?">
          <Form>
            <Item regular>
              <Input placeholder="Phone number" />
            </Item>
          </Form>
          <Button style={{ marginTop: 16 }} block onPress={() => props.navigation.navigate('CreatePasswordStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default PhoneNumberStep;
