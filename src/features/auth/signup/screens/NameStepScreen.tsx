import * as React from 'react';
import { Form, Item, Input, Container, Content, Button, Text } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'NameStep'>;
  route: RouteProp<SignUpStackParams, 'NameStep'>;
};

const { Step } = sharedComponents;

function NameStep(props: Props) {
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
        <Step title="What is your name?">
          <Form>
            <Item regular>
              <Input placeholder="Full name" />
            </Item>
          </Form>
          <Button style={{ marginTop: 16 }} block onPress={() => props.navigation.navigate('BirthdayStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default NameStep;
