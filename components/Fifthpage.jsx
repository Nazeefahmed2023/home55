import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function AddressSlotScreen() {
  const [selectedDate, setSelectedDate] = useState('03');
  const [selectedSlot, setSelectedSlot] = useState('Less than 45 mins');
  const [paymentMethod, setPaymentMethod] = useState('Pay Online');
  const [instructions, setInstructions] = useState('');

  const dates = [
    { day: '03', label: 'Today' },
    { day: '04', label: 'Tomorrow' },
  ];

  const slots = [
    'Less than 45 mins',
    '10:00 - 01:00 AM',
    '02:00 - 04:00 PM',
    '04:00 - 06:00 PM',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Address & Slot</Text>

      <View style={styles.addressBox}>
        <View style={styles.addressRow}>
          <MaterialIcons name="location-pin" size={20} color="white" style={styles.icon} />
          <Text style={styles.addressType}>Home ▼</Text>
        </View>
        <Text style={styles.addressText}>No 2, 7th floor, Mantri DSK Pinnacle, Cave Temple Rd...</Text>
      </View>

      <Text style={styles.sectionTitle}>When do you want the delivery?</Text>

      <View style={styles.dateContainer}>
        {dates.map((item) => (
          <TouchableOpacity
            key={item.day}
            style={[styles.dateBox, selectedDate === item.day && styles.selectedDateBox]}
            onPress={() => setSelectedDate(item.day)}
          >
            <Text style={styles.dateMonth}>Jan</Text>
            <Text style={styles.dateDay}>{item.day}</Text>
            <Text style={styles.dateLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Available Slots</Text>
      <View style={styles.slotContainer}>
        {slots.map((slot, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.slotBox, selectedSlot === slot && styles.selectedSlot]}
            onPress={() => setSelectedSlot(slot)}
          >
            <Text style={styles.slotText}>{slot}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.inputBox}
        placeholder="Any Delivery Instructions? Ex opposite to E-mart"
        placeholderTextColor="#888"
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.sectionTitle}>Payment method</Text>
      <View style={styles.paymentContainer}>
        {['Pay Online', 'Cash on Delivery'].map((method) => (
          <TouchableOpacity
            key={method}
            style={[styles.paymentBox, paymentMethod === method && styles.selectedPayment]}
            onPress={() => setPaymentMethod(method)}
          >
            <FontAwesome
              name={paymentMethod === method ? 'check-circle' : 'circle-o'}
              size={16}
              color={paymentMethod === method ? 'green' : 'gray'}
            />
            <Text style={styles.paymentText}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.totalText}>Total: ₹150</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addressBox: {
    backgroundColor: '#007f0e',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  addressType: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  addressText: {
    color: 'white',
    fontSize: 13,
    marginTop: 6,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dateBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 100,
  },
  selectedDateBox: {
    borderColor: 'green',
    backgroundColor: '#e6ffe6',
  },
  dateMonth: {
    fontSize: 12,
    fontWeight: '500',
  },
  dateDay: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateLabel: {
    fontSize: 13,
    marginTop: 4,
  },
  slotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  slotBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 6,
  },
  selectedSlot: {
    backgroundColor: '#e6ffe6',
    borderColor: 'green',
  },
  slotText: {
    fontSize: 13,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
    marginBottom: 16,
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  paymentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedPayment: {
    backgroundColor: '#e6ffe6',
    borderColor: 'green',
  },
  paymentText: {
    marginLeft: 8,
    fontSize: 13,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#007f0e',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
