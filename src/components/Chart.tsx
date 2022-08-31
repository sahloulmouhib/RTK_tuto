import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Chart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.label}>Label</Text>
        <Text>Icon</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.metric}>223 h</Text>
        <Text>Icon</Text>
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282829',

    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {},
  metric: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    margin: 5,
  },
  label: {
    color: 'white',
    opacity: 0.7,
  },
});
