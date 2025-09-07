import React from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import ThirdPage from '../components/Thirdpage';

export default function MyNewPage({ navigation }) {
  return (
    <View style={styles.container}>

        
      <Text style={styles.title}>this is product list page</Text>
     <Button title="Go Back to category" onPress={() => router.push('/category')} />
      <Button title="Go to productdetail Page" onPress={() => router.push('/Productdetail')} />
     <ThirdPage/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008080',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
