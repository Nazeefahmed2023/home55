import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const OffersZoneScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Your Offers Zone</Text>

      <Image
        source={{ uri: 'https://example.com/deal-banner.png' }} // Replace with real image URL
        style={styles.offerImage}
      />

      <Image
        source={{ uri: 'https://example.com/cashback-banner.png' }} // Replace with real image URL
        style={styles.offerImage}
      />

      <Image
        source={{ uri: 'https://example.com/nutrition-banner.png' }} // Replace with real image URL
        style={styles.offerImage}
      />

      <Image
        source={{ uri: 'https://example.com/coke-banner.png' }} // Replace with real image URL
        style={styles.offerImage}
      />

      <Text style={styles.bottomText}>Didn’t Find What You Were Looking For?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search Products</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  offerImage: {
    width: '90%',
    height: 150,
    borderRadius: 12,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4F4F4F',
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1BA672',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OffersZoneScreen;
