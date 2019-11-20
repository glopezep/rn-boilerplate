import * as React from 'react';
import { Text, Button, Container, Content } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'InitialStep'>;
  route: RouteProp<SignUpStackParams, 'InitialStep'>;
};

const { Step } = sharedComponents;

function InitialStep(props: Props) {
  return (
    <Container>
      <Content
        padder
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Step title="Join Company Name">
          <Text style={{ textAlign: 'center' }}>
            We will help you create an account in few easy steps.
          </Text>
          <Button style={{ marginTop: 16 }} block onPress={() => props.navigation.navigate('NameStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default InitialStep;
