

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Eleventhpage from '../components/Eleventhpage';

export default function MyComponent() {
  const router = useRouter(); // ✅ Hook for navigation

  return ( // ✅ Add return here
    <View style={styles.container}>
      <Text>welcome to my address page !</Text>
      <Text>This is my address page </Text>

      <Button
        title="Go to OrderPlaced Page"
        onPress={() => router.push('/orderplaced')}
      />

      <Button
        title="Go to addresssearch page "
        onPress={() => router.push('/addresssearch')}
      />

      <Eleventhpage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fill the whole screen
    backgroundColor: '#fff',  // White background
    alignItems: 'center',     // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
});
