import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function AhmadMartBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ahmedlogo.jpg')} // Replace with your image
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.featuresBox}>
        <Text style={styles.bulletText}>● <Text style={styles.text}>Extra Savings</Text></Text>
        <Text style={styles.bulletText}>● <Text style={styles.text}>Fast Deliveries</Text></Text>
        <Text style={styles.bulletText}>● <Text style={styles.text}>Free Deliveries</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#006400', // Dark green
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 250,
  },
  logo: {
    flex: 1,
    height: '100%',
    marginRight: 10,
  },
  featuresBox: {
    flex: 1,
    
    
    padding: 15,
    
    
    backgroundColor: 'transparent',
  },
  bulletText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    color: 'white',
  },
});
