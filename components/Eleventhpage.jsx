import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const addresses = [
  {
    type: 'Home',
    icon: 'home',
    color: 'green',
    address: '#2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076',
    name: 'Prem Kumar',
    phone: '7892460982',
  },
  {
    type: 'Office',
    icon: 'location-city',
    color: 'green',
    address: '#677, 1st Floor, Suite No.435, 27th Main, 13th Cross, HSR Layout, Sector 1, Bangalore, Karnataka, 560076',
    name: 'Afsar Pasha',
    phone: '7892460982',
  },
];

export default function MyAddressScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Address</Text>

      {addresses.map((item, index) => (
        <View key={item.type + index} style={styles.card}>
          {/* Icon in Circle */}
          <View style={styles.iconWrapper}>
            <MaterialIcons name={item.icon} size={24} color="#fff" />
          </View>

          {/* 3-dot menu */}
          <Entypo name="dots-three-vertical" size={16} style={styles.dots} color="#444" />

          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <View style={styles.divider} />
          <Text style={styles.contact}>{item.name}, {item.phone}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 25,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: 'green',
    borderWidth: 0.5,
    padding: 15,
    paddingTop: 40, // add extra space for top icon
    marginBottom: 20,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  iconWrapper: {
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    zIndex: 2,
  },
  dots: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  contact: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
});
