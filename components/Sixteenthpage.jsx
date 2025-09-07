import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderTrackingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.orderId}>#AM112034</Text>
        <TouchableOpacity><Text style={styles.orderedItems}>View Ordered Items ▶</Text></TouchableOpacity>
      </View>

      {/* Support */}
      <TouchableOpacity style={styles.support}>
        <Icon name="headset" size={18} color="#28A745" />
        <Text style={styles.supportText}>Support</Text>
      </TouchableOpacity>

      {/* Address */}
      <View style={styles.card}>
        <Icon name="home" size={20} color="#28A745" style={styles.icon} />
        <Text style={styles.label}>Delivered to <Text style={styles.green}>Home</Text></Text>
        <Text style={styles.details}>#2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076</Text>
        <Text style={styles.details}>Prem Kumar, 7892460982, 7892460982</Text>
      </View>

      {/* Time Slot */}
      <View style={styles.card}>
        <Icon name="time-outline" size={18} color="#28A745" style={styles.icon} />
        <Text style={styles.label}>Time Slot</Text>
        <Text style={styles.details}>28 Dec 2, Monday  <Text style={styles.bold}>06:00 - 10:00 AM</Text></Text>
      </View>

      {/* Order Status */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Order Status</Text>
        <View style={styles.statusRow}>
          <StatusItem icon="checkmark-circle" label="Order Placed" />
          <StatusItem icon="cube" label="Packed" />
          <StatusItem icon="car" label="Out for Delivery" />
          <StatusItem icon="checkmark-done-circle" label="Delivered" />
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Payment Details</Text>
        <PaymentRow label="Payment Option" value="COD" />
        <PaymentRow label="Sub Total" value="₹123" />
        <PaymentRow label="Coupon Discount" value="₹00" />
        <PaymentRow label="Delivery Charge" value="₹27" />
        <PaymentRow label="GST Taxes" value="₹10" />
        <PaymentRow label="Total Amount" value="₹160" bold />
      </View>

      {/* Savings */}
      <View style={styles.savings}>
        <Text style={styles.savingsText}>Your Savings</Text>
        <Text style={styles.savingsAmount}>₹18</Text>
      </View>
    </ScrollView>
  );
};

const StatusItem = ({ icon, label }) => (
  <View style={{ alignItems: 'center', flex: 1 }}>
    <Icon name={icon} size={24} color="#28A745" />
    <Text style={{ fontSize: 12, color: '#28A745', marginTop: 4 }}>{label}</Text>
  </View>
);

const PaymentRow = ({ label, value, bold }) => (
  <View style={styles.paymentRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, bold && styles.bold]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 12, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  orderId: { fontWeight: 'bold', fontSize: 16 },
  orderedItems: { color: '#28A745', fontSize: 13 },

  support: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 8 },
  supportText: { color: '#28A745', fontSize: 13, marginLeft: 5 },

  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    borderColor: '#28A745',
    borderWidth: 0.5,
  },
  icon: { alignSelf: 'center', marginBottom: 4 },
  label: { fontWeight: '500', marginTop: 2 },
  green: { color: '#28A745' },
  bold: { fontWeight: 'bold' },
  details: { fontSize: 13, marginVertical: 2 },

  sectionHeader: { fontWeight: 'bold', marginBottom: 8, fontSize: 14 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },

  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  value: { fontSize: 13 },

  savings: {
    marginTop: 12,
    backgroundColor: '#DFF5E1',
    padding: 10,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savingsText: { color: '#28A745', fontWeight: '500' },
  savingsAmount: { color: '#28A745', fontWeight: 'bold' },
});

export default OrderTrackingScreen;
