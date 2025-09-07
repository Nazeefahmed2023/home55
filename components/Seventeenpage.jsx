import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const OrderSummaryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderId}>#AM112034</Text>
        <TouchableOpacity>
          <Text style={styles.orderedItems}>View Ordered Items ▶</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addressContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesome5 name="home" size={20} color="green" />
        </View>
        <View>
          <Text style={styles.addressHeader}>Delivered to <Text style={styles.green}>Home</Text></Text>
          <Text style={styles.address}>#2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076</Text>
          <Text style={styles.name}>Prem Kumar, 7892460982, 7892460982</Text>
        </View>
      </View>

      <View style={styles.timeSlotContainer}>
        <Ionicons name="time-outline" size={20} color="green" />
        <Text style={styles.timeSlotText}>28 Dec 2, Monday  06:00 - 10:00 AM</Text>
      </View>

      <View style={styles.orderStatusContainer}>
        <Text style={styles.sectionTitle}>Order Status</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusItem}><FontAwesome5 name="clipboard-check" size={24} color="green" /><Text style={styles.statusText}>Order Placed</Text></View>
          <View style={styles.statusItem}><MaterialIcons name="inventory" size={24} color="green" /><Text style={styles.statusText}>Packed</Text></View>
          <View style={styles.statusItem}><MaterialIcons name="local-shipping" size={24} color="green" /><Text style={styles.statusText}>Out for Delivery</Text></View>
          <View style={styles.statusItem}><Ionicons name="checkmark-done" size={24} color="green" /><Text style={styles.statusText}>Delivered</Text></View>
        </View>
      </View>

      <View style={styles.paymentDetailsContainer}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <Text style={styles.paymentRow}>Payment Option <Text style={styles.amount}>COD</Text></Text>
        <Text style={styles.paymentRow}>Sub Total <Text style={styles.amount}>₹123</Text></Text>
        <Text style={styles.paymentRow}>Coupon Discount <Text style={styles.amount}>₹00</Text></Text>
        <Text style={styles.paymentRow}>Delivery Charge <Text style={styles.amount}>₹27</Text></Text>
        <Text style={styles.paymentRow}>GST Taxes <Text style={styles.amount}>₹10</Text></Text>
        <Text style={styles.totalRow}>Total Amount <Text style={styles.totalAmount}>₹160</Text></Text>
      </View>

      <View style={styles.savingsBanner}>
        <Text style={styles.savingsText}>Your Savings  ₹18</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  orderId: { fontSize: 16, fontWeight: '600' },
  orderedItems: { color: 'green', fontWeight: '600' },
  addressContainer: { flexDirection: 'row', backgroundColor: '#f9f9f9', padding: 12, borderRadius: 8, borderColor: 'green', borderWidth: 1, marginBottom: 16 },
  iconWrapper: { marginRight: 10, justifyContent: 'center' },
  addressHeader: { fontWeight: 'bold' },
  green: { color: 'green' },
  address: { color: '#555', marginTop: 4 },
  name: { color: '#000', marginTop: 4 },
  timeSlotContainer: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 8, backgroundColor: '#f9f9f9', marginBottom: 16 },
  timeSlotText: { marginLeft: 8, fontSize: 14 },
  orderStatusContainer: { padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 16 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 8 },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statusItem: { alignItems: 'center', width: '25%' },
  statusText: { marginTop: 4, fontSize: 12, color: '#333' },
  paymentDetailsContainer: { padding: 12, backgroundColor: '#f9f9f9', borderRadius: 8, marginBottom: 16 },
  paymentRow: { marginTop: 8, fontSize: 14, color: '#555' },
  amount: { fontWeight: 'bold', color: '#000' },
  totalRow: { marginTop: 12, fontSize: 16, fontWeight: 'bold' },
  totalAmount: { color: 'green' },
  savingsBanner: { backgroundColor: '#e1f7e1', padding: 16, borderRadius: 8, alignItems: 'center' },
  savingsText: { color: 'green', fontWeight: 'bold' }
});

export default OrderSummaryScreen;
