import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, H3 } from 'native-base'

interface Props {
  children: string
}

function StepTitle(props: Props) {
  return (
    <H3 style={styles.title}>{props.children}</H3>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 16
  },
})


export default StepTitle;