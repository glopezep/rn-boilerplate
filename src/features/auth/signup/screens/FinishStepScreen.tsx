import * as React from 'react';
import { Text, Container, Content, Button } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'FinishStep'>;
  route: RouteProp<SignUpStackParams, 'FinishStep'>;
};
const { Step } = sharedComponents;

function FinishStep(props: Props) {
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
        <Step title="Finish Sign Up">
          <Text style={{ textAlign: 'center' }}>
            By tapping Sign Up you agree to our Terns, Data Policy and Cookies
            Policy
          </Text>
          <Button style={{ marginTop: 16 }} block>
            <Text>Sign Up</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default FinishStep;
