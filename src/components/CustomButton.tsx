import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  disabled: boolean;
  onPress: () => void;
  text: string;
};

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={{
        ...styles.button,
        backgroundColor: (!props.disabled && '#E41B12') || '#F3F3F3',
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: (props.disabled && '#DBDBDB') || 'white',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
});
