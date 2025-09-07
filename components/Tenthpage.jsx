import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Use only one icon set

const notifications = [
  {
    id: '231221',
    time: '06:06 PM',
    message: 'Your Order is Confirmed. Please check everything is okay.',
    icon: 'assignment', // Valid MaterialIcons icon
  },
  {
    id: '211221',
    time: 'Yesterday, 07:05 AM',
    message: 'Your Order was delivered successfully.\nPlease rate our service.',
    icon: 'star-rate', // Changed to valid MaterialIcons icon
  },
  {
    id: '201221',
    time: '24th Dec 11:21 AM',
    message:
      'Congratulations! You have received a new coupon code. Apply NEWYEAR2134 before Jan 15, 2022.',
    icon: 'local-offer',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {notifications.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.order}>Order #{item.id}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <Text style={styles.message}>{item.message}</Text>
          <View style={styles.iconCircle}>
            <MaterialIcons name={item.icon} size={22} color="#fff" />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  clearText: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  order: {
    fontWeight: '600',
    fontSize: 15,
  },
  time: {
    color: '#555',
    fontSize: 13,
  },
  message: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  iconCircle: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: 'green',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
