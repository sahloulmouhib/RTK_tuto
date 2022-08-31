import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchTodos } from '../features/todos/todosSlice';

export default function Todos() {
  const todos = useAppSelector((state) => state.todos);
  console.log(todos.loading);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      {todos.loading === 'pending' ? (
        <ActivityIndicator animating={true} />
      ) : (
        <Text>{todos.entities.length}</Text>
      )}
      <Button
        title="Get todos"
        onPress={() => {
          dispatch(fetchTodos());
        }}
      />
      <Text>{`Api state: ${todos.loading}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
