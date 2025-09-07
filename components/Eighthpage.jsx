import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function OrderSummaryScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.support}>Support</Text>
      </View>

      {/* Address */}
      <View style={styles.addressContainer}>
        <View style={styles.addressHeader}>
          <Ionicons name="home" size={20} color="#2e7d32" />
          <Text style={styles.addressType}>Deliver to <Text style={{ fontWeight: 'bold' }}>Home</Text></Text>
        </View>
        <Text style={styles.addressText}>
          #2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076
        </Text>
        <Text style={styles.addressText}>Prem Kumar, 7892460982, 7892460982</Text>
      </View>

      {/* Time Slot */}
      <View style={styles.timeSlotContainer}>
        <Text style={styles.timeSlotTitle}>Time Slot</Text>
        <Text style={styles.timeSlotTime}>01 Jan 22, Saturday   <Text style={{ fontWeight: 'bold' }}>06:00 - 10:00 AM</Text></Text>
      </View>

      {/* Order Status */}
      <View style={styles.orderStatusContainer}>
        <Text style={styles.sectionTitle}>Order Status</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusItem}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={28} color="#2e7d32" />
            <Text style={styles.statusLabel}>Order Placed</Text>
          </View>
          <View style={styles.statusItem}>
            <MaterialCommunityIcons name="cube" size={28} color="#2e7d32" />
            <Text style={styles.statusLabel}>Packed</Text>
          </View>
          <View style={styles.statusItem}>
            <MaterialCommunityIcons name="truck-delivery" size={28} color="#2e7d32" />
            <Text style={styles.statusLabel}>Out for Delivery</Text>
          </View>
          <View style={styles.statusItem}>
            <MaterialCommunityIcons name="home-check" size={28} color="#ccc" />
            <Text style={styles.statusLabel}>Delivered</Text>
          </View>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentContainer}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <View style={styles.paymentRow}><Text>Payment Option</Text><Text>COD</Text></View>
        <View style={styles.paymentRow}><Text>Sub Total</Text><Text>₹123</Text></View>
        <View style={styles.paymentRow}><Text>Coupon Discount</Text><Text>₹70</Text></View>
        <View style={styles.paymentRow}><Text>Delivery Charge</Text><Text>₹27</Text></View>
        <View style={styles.paymentRow}><Text>GST Taxes</Text><Text>₹10</Text></View>
        <View style={styles.totalRow}><Text>Total Amount</Text><Text style={{ fontWeight: 'bold' }}>₹160</Text></View>
      </View>

      {/* Savings */}
      <View style={styles.savingsContainer}>
        <Text style={styles.savingsText}>Your Savings ₹18</Text>
      </View>

      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    marginTop: 40,
    alignItems: 'flex-end',
  },
  support: {
    color: '#2e7d32',
    fontWeight: '600',
    marginBottom: 10,
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: '#2e7d32',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  addressType: {
    marginLeft: 8,
    fontSize: 14,
  },
  addressText: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  timeSlotContainer: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  timeSlotTitle: {
    color: '#333',
    fontWeight: '600',
    marginBottom: 4,
  },
  timeSlotTime: {
    color: '#000',
  },
  orderStatusContainer: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statusItem: {
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  paymentContainer: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 5,
  },
  savingsContainer: {
    backgroundColor: '#d0f0c0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  savingsText: {
    color: '#2e7d32',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
