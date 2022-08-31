import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../features/counter/counterSlice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Counter</Text>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increment())} title="increment" />
      <Button onPress={() => dispatch(decrement())} title="decrement" />
      <Button
        onPress={() => dispatch(incrementByAmount(5))}
        title="increment by 5"
      />
      <Button onPress={() => dispatch(reset())} title="reset" />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
