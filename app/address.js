import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Sixthpage from '../components/Sixthpage';
import { useRouter } from 'expo-router'; // Import useRouter

export default function AddressScreen() {
  const router = useRouter(); // ✅ Initialize router here

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go Back to Product Detail"
          onPress={() => router.push('/productdetail')} // Corrected path
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Order List"
          onPress={() => router.push('/orderlist')}
        />
      </View>

      <Sixthpage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
});
