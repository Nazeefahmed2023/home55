import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Phone from '../components/phone';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>this is the phone page </Text>
      <Text style={styles.title}>this is your phone page </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="go to home  page "
          onPress={() => router.push('/home ')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="go to home page "
          onPress={() => router.push('/home')}
        />
      </View>

      <Phone/>
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
