import * as React from 'react';
import { Form, Item, DatePicker, Container, Content, Button, Text } from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import { components as sharedComponents } from '../../../shared';
import { SignUpStackParams } from '../../types';

interface Props {
  navigation: NavigationProp<SignUpStackParams, 'BirthdayStep'>;
  route: RouteProp<SignUpStackParams, 'BirthdayStep'>;
}

const { Step } = sharedComponents;

function BirthdayStep(props: Props) {
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
        <Step title="When is your Birthday?">
          <Form>
            <Item regular>
              <DatePicker
                formatChosenDate={(date) => date.toString().substr(4, 12)}
                defaultDate={new Date(2018, 4, 4)}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={true}
                animationType={'fade'}
                androidMode='default'
                placeHolderText="Select date"
                textStyle={{ color: 'black' }}
                placeHolderTextStyle={{ color: '#d3d3d3' }}
                // onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
          </Form>
          <Button style={{ marginTop: 16 }} block onPress={() => props.navigation.navigate('GenderStep')}>
            <Text>Next</Text>
          </Button>
        </Step>
      </Content>
    </Container>
  );
}

export default BirthdayStep;
