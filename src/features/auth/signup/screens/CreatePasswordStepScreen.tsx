import * as React from 'react';
import { Form, Item, Input, Content, Container, Button, Text } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'CreatePasswordStep'>;
  route: RouteProp<SignUpStackParams, 'CreatePasswordStep'>;
};

const { Step } = sharedComponents;

function CreatePasswordStep(props: Props) {
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
        <Step title="Create a password">
          <Form>
            <Item regular>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button style={{ marginTop: 16 }} block onPress={() => props.navigation.navigate('FinishStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default CreatePasswordStep;
