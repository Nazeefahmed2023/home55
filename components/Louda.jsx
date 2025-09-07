import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Louda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
