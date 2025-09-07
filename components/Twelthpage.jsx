import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function DeliveryAddressScreen() {
  const [addressType, setAddressType] = useState('Home');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>

      <Text style={styles.label}>Receiver Name</Text>
      <TextInput style={styles.input} placeholder="Prem Kumar" />

      <Text style={styles.label}>Mobile Number 1</Text>
      <TextInput style={styles.input} placeholder="789 246 0982" keyboardType="phone-pad" />

      <Text style={styles.label}>Mobile Number 2 (Optional)</Text>
      <TextInput style={styles.input} placeholder="789 246 0982" keyboardType="phone-pad" />

      <Text style={styles.label}>Flat/House No</Text>
      <TextInput style={styles.input} placeholder="2" />

      <Text style={styles.label}>Enter Floor No</Text>
      <TextInput style={styles.input} placeholder="7" />

      <Text style={styles.label}>Building/Apartment Name</Text>
      <TextInput style={styles.input} placeholder="Mantri DSK Pinnacle" />

      <Text style={styles.label}>Save Address As</Text>
      <View style={styles.radioContainer}>
        {['Home', 'Office', 'Others'].map(type => (
          <TouchableOpacity
            key={type}
            onPress={() => setAddressType(type)}
            style={styles.radioOption}
          >
            <View style={styles.outerCircle}>
              {addressType === type && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.radioLabel}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  outerCircle: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  radioLabel: {
    fontSize: 14,
    color: '#333',
  },
  saveButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
