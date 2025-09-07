import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Eighthpage from '../components/Eighthpage';

export default function MyComponent() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Welcome to order detail page!</Text>
      <Text>This is the order detail page.</Text>

      <Button
        title="Go to Order Placed"
        onPress={() => router.push('/orderplaced')}
      />

      <Button
        title="Go Back to Order List"
        onPress={() => router.push('/orderplaced')}
      />

      <Eighthpage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
