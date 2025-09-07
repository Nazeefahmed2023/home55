import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Seventhpage from '../components/Seventhpage';

export default function MyComponent() {
  const router = useRouter(); // ✅ Add this to use routing

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>This is Order List Page</Text>

        <Button
          title="go to order detail"
          onPress={() => router.push('/oderdetail')}
        />

        <Button
          title="Go Back to order detail"
          onPress={() => router.push('/orderdetail')}
        />

        <Seventhpage />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
});
