import * as React from 'react';
import {
  ListItem,
  Left,
  Right,
  Radio,
  Text,
  Container,
  Content,
  Button,
} from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

type Props = {
  navigation: NavigationProp<SignUpStackParams, 'GenderStep'>;
  route: RouteProp<SignUpStackParams, 'GenderStep'>;
};
const { Step } = sharedComponents;

function GenderStep(props: Props) {
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
        <Step title="What is your Gender?">
          <ListItem selected={true}>
            <Left>
              <Text>Female</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Male</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Custom</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <Button
            style={{ marginTop: 16 }}
            block
            onPress={() => props.navigation.navigate('PhoneNumberStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default GenderStep;
