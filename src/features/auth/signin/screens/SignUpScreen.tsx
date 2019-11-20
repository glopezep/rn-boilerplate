import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Text,
  Form,
  Item,
  Input,
  Content,
  H1,
  H2,
  H3,
  DatePicker,
  ListItem,
  Radio,
  Left,
  Right,
} from 'native-base';
import { NavigationProp, RouteProp } from '@react-navigation/core';

import InitialStep from '../../components/signup/InitialStep';
import NameStep from '../../components/signup/NameStep';
import BirthdayStep from '../../components/signup/BirthdayStep';
import GenderStep from '../../components/signup/GenderStep';
import PhoneNumberStep from '../../components/signup/PhoneNumberStep';
import CreatePasswordStep from '../../components/signup/CreatePasswordStep';
import FinishStep from '../../components/signup/FinishStep';
import { StackParams } from '../../types';

type Props = {
  navigation: NavigationProp<StackParams, 'SignUp'>;
  route: RouteProp<StackParams, 'SignUp'>;
};

function SignUpScreen(props: Props) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = [
    <InitialStep />,
    <NameStep />,
    <BirthdayStep />,
    <GenderStep />,
    <PhoneNumberStep />,
    <CreatePasswordStep />,
    <FinishStep />,
  ];

  const stepsLength = steps.length;

  const setStep = () => {
    if (currentStep === stepsLength - 1) {
      return setCurrentStep(0);
    }

    return setCurrentStep(currentStep + 1);
  };

  const setBackStep = () => {
    if (currentStep === 0) {
      return setCurrentStep(0);
    }

    return setCurrentStep(currentStep - 1);
  };

  return (
    <Container style={styles.container}>
      <Content
        padder
        contentContainerStyle={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
        scrollEnabled={false}>
        {steps[currentStep]}

        {currentStep === stepsLength - 1 ? (
          <Button block style={styles.button}>
            <Text>Sign up</Text>
          </Button>
        ) : (
          <Button block style={styles.button} onPress={() => setStep()}>
            <Text>Next</Text>
          </Button>
        )}

        {currentStep !== 0 && (
          <Button block light onPress={() => setBackStep()}>
            <Text>Back</Text>
          </Button>
        )}
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
  },
  stepContainer: {
    marginBottom: 32,
  },
});

const stepperStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#0960ff',
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: '#0960ff',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0960ff',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0960ff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#0960ff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#0960ff',
};

export default SignUpScreen;
