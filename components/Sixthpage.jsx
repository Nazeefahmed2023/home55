import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DeliveryScreen() {
  const [selectedDate, setSelectedDate] = useState('03');
  const [selectedSlot, setSelectedSlot] = useState('Less than 45 mins');
  const [paymentMethod, setPaymentMethod] = useState('Pay Online');
  const [instructions, setInstructions] = useState('');

  const slots = ['Less than 45 mins', '10:00 – 01:00 AM', '02:00 – 04:00 PM', '04:00 – 06:00 PM'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Address & Slot</Text>

      <View style={styles.addressContainer}>
        <Icon name="location-outline" size={20} color="#00A86B" />
        <Text style={styles.addressLabel}>Home</Text>
        <Text style={styles.addressText}>No 2, 7th floor, Mantri DSK Pinnacle, Cave Temple R...</Text>
      </View>

      <Text style={styles.sectionTitle}>When do you want the delivery?</Text>

      <View style={styles.dateRow}>
        <TouchableOpacity
          style={[styles.dateBox, selectedDate === '03' && styles.dateBoxSelected]}
          onPress={() => setSelectedDate('03')}>
          <Text style={styles.dateText}>Jan</Text>
          <Text style={styles.dateNumber}>03</Text>
          <Text style={styles.dateNote}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateBox, selectedDate === '04' && styles.dateBoxSelected]}
          onPress={() => setSelectedDate('04')}>
          <Text style={styles.dateText}>Jan</Text>
          <Text style={styles.dateNumber}>04</Text>
          <Text style={styles.dateNote}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slotContainer}>
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.slotButton,
              selectedSlot === slot && styles.slotSelected,
            ]}
            onPress={() => setSelectedSlot(slot)}
          >
            <Text style={styles.slotText}>{slot}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Any Delivery Instructions? Ex opposite to E-mart"
        placeholderTextColor="#777"
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />

      <Text style={styles.sectionTitle}>Payment method</Text>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={[styles.paymentButton, paymentMethod === 'Pay Online' && styles.paymentSelected]}
          onPress={() => setPaymentMethod('Pay Online')}
        >
          <Text style={styles.paymentText}>Pay Online</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentButton, paymentMethod === 'Cash on Delivery' && styles.paymentSelected]}
          onPress={() => setPaymentMethod('Cash on Delivery')}
        >
          <Text style={styles.paymentText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹150</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  addressContainer: {
    backgroundColor: '#E6F7F1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  addressLabel: {
    fontWeight: 'bold',
    color: '#00A86B',
    marginTop: 5,
  },
  addressText: {
    fontSize: 13,
    color: '#333',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  dateRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dateBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    alignItems: 'center',
    width: 80,
  },
  dateBoxSelected: {
    borderColor: '#00A86B',
    backgroundColor: '#E6F7F1',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  dateNumber: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dateNote: {
    fontSize: 12,
    color: '#555',
  },
  slotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  slotButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  slotSelected: {
    backgroundColor: '#E6F7F1',
    borderColor: '#00A86B',
  },
  slotText: {
    color: '#333',
    fontSize: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00A86B',
    borderRadius: 10,
    padding: 10,
    minHeight: 60,
    marginBottom: 20,
    color: '#000',
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  paymentSelected: {
    backgroundColor: '#E6F7F1',
    borderColor: '#00A86B',
  },
  paymentText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#00A86B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
