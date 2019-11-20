import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {
  children: any
}

function TestComponent(props: Props) {
  return (
    <View>
      {props.children}
    </View>
  );
}


export default TestComponent;