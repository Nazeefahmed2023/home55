import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchPrompt() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Didn’t Find{'\n'}
        What You Were{'\n'}
        Looking For?
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search Products</Text>
      </TouchableOpacity>

      {/* Use a separate wrapper without flex: 1 */}
      <View style={styles.footerContainer}>
        <Text style={styles.text}>Fresh &</Text>
        <Text style={styles.text}>Fast</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#a0a0a0',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 48,
  },
  button: {
    backgroundColor: '#006400',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
  },
});
