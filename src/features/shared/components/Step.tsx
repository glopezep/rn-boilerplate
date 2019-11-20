import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StepTitle from './StepTitle'
import StepContent from './StepContent'

interface Props {
  title: string
  children: any
}

function Step(props: Props) {
  return (
    <View style={styles.container}>
      <StepTitle>{props.title}</StepTitle>
      <StepContent>{props.children}</StepContent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%',
  },
})


export default Step;