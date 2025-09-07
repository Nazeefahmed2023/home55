import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Tenthpage from '../components/Tenthpage';

export default function MyComponent() {
  const router = useRouter(); // ✅ Hook for navigation

  return ( // ✅ Add return here
    <View style={styles.container}>
      <Text>Welcome to order detail page!</Text>
      <Text>This is order detail page.</Text>

      <Button
        title="Go to OrderPlaced Page"
        onPress={() => router.push('/orderplaced')}
      />

      <Button
        title="Go Back to Order List"
        onPress={() => router.push('/myaddress')}
      />

      <Tenthpage />
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
