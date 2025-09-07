import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Cart from '../components/Cart';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to the Cart Page</Text>
      <Text style={styles.title}>This is your cart</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Go Back to Product Detail"
          onPress={() => router.push('/productdetail')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Address Page"
          onPress={() => router.push('/address')}
        />
      </View>

      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
