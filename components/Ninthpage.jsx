import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function OrderPlacedScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Order Placed</Text>

      <View style={styles.checkCircle}>
        <FontAwesome name="check" size={60} color="white" />
      </View>

      <Text style={styles.successText}>Your Order is Successfully Placed!</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="home" size={24} color="#4CAF50" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Deliver to Home</Text>
        </View>
        <Text style={styles.cardText}>
          #2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076
        </Text>
        <Text style={styles.cardText}>
          Prem Kumar, 7892460982, 7892460982
        </Text>
      </View>

      <View style={styles.timeSlot}>
        <Ionicons name="time" size={24} color="black" style={styles.cardIcon} />
        <View>
          <Text style={styles.slotLabel}>Time Slot</Text>
          <Text style={styles.slotText}>01 Jan 22, Saturday   06:30 - 07:30 AM</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginTop: 40,
    fontWeight: '600',
  },
  checkCircle: {
    marginVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: 16,
    marginBottom: 30,
    fontWeight: '500',
  },
  card: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 12,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardIcon: {
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    marginBottom: 30,
  },
  slotLabel: {
    fontSize: 14,
    color: '#777',
  },
  slotText: {
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
