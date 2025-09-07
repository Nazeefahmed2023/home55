

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Thirtheenpage from '../components/Thirtheenpage';

export default function MyComponent() {
  const router = useRouter(); // ✅ Hook for navigation

  return ( // ✅ Add return here
    <View style={styles.container}>
      <Text>welcome to order product page </Text>
      <Text>This is order product page    </Text>

      <Button
        title="Go to OrderPlaced Page"
        onPress={() => router.push('/orderplaced')}
      />

      <Button
        title="Go Back to offers page"
        onPress={() => router.push('/offers')}
      />

      <Thirtheenpage />
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
