import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Twelthpage from '../components/Twelthpage';

export default function MyComponent() {
  const router = useRouter(); // ✅ Hook for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Address Edit</Text>
      <Text style={styles.subtitle}>This is my address edit page</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to OrderPlaced Page"
          onPress={() => router.push('/orderplaced')}
          color="green"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to map page"
          onPress={() => router.push('/map')}
          color="green"
        />
      </View>

      <Twelthpage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
});
