import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SecondCont() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'start' }}>
        {/* Top Banner */}
        <Image source={require('../assets/banner1img.png')} style={styles.bannerImage} />

        {/* Dot indicators (mocked) */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
        </View>

        {/* Credit Card Section */}
        <View style={styles.cardSection}>
          <Image source={require('../assets/creditcard.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>AhmadMart Credit Card</Text>

          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Personalized credit limit</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Flexi Pay option</Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>Buy now and pay later</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'start',
    width: '110%',

  },
  bannerImage: {
    width: 391,
    height: 250,
    resizeMode: 'cover',
    marginTop: 0,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,           // For RN 0.71+
    marginRight: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  cardSection: {
    width: '90%',
    backgroundColor: '#eaffea',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,

    // Adjustments to shift left:
    alignSelf: 'flex-start',
    marginLeft: 20, // shift left a bit
  },
  cardImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 12,
    color: '#111',
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bulletPoint: {
    fontSize: 18,
    marginRight: 6,
    color: '#444',
  },
  bulletText: {
    fontSize: 14,
    color: '#444',
  },
  button: {
    backgroundColor: '#007500',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
