import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Counter from './src/components/Counter';
import Todos from './src/components/Todos';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Counter />
        <Todos />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
