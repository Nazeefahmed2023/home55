import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for "support" icon

const transactions = [
  { date: '15/02/2024', orderNo: '#123456', trans: '-₹430', balance: '₹15,780' },
  { date: '14/02/2024', orderNo: '#123456', trans: '-₹890', balance: '₹14,786' },
  { date: '14/02/2024', orderNo: '#123456', trans: '+₹260', balance: '₹14,990' },
  { date: '10/02/2024', orderNo: '#123456', trans: '-₹350', balance: '₹14,720' },
  { date: '10/02/2024', orderNo: '#123456', trans: '-₹120', balance: '₹14,600' },
  { date: '10/02/2024', orderNo: '#123456', trans: '+₹500', balance: '₹15,100' },
];

const CreditCardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>AhmadMart Credit Card</Text>
        <TouchableOpacity style={styles.support}>
          <Ionicons name="headset-outline" size={20} color="#27AE60" />
          <Text style={styles.supportText}>Support</Text>
        </TouchableOpacity>
      </View>

      {/* Card Info */}
      <View style={styles.card}>
        <Text style={styles.cardNumber}>1234 5678 9101 1213</Text>
        <View style={styles.limitsRow}>
          <View>
            <Text style={styles.limitLabel}>Overall Limit</Text>
            <Text style={styles.limitAmount}>₹15,000</Text>
          </View>
          <View>
            <Text style={styles.limitLabel}>Available Limit</Text>
            <Text style={styles.limitAmount}>₹11,438</Text>
          </View>
        </View>
      </View>

      {/* Transaction Header */}
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction History (30)</Text>
        <TouchableOpacity>
          <Text style={styles.paymentLink}>Make payment</Text>
        </TouchableOpacity>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.cell}>Date</Text>
        <Text style={styles.cell}>Order No</Text>
        <Text style={styles.cell}>Trans</Text>
        <Text style={styles.cell}>Balance</Text>
      </View>

      {/* Transactions */}
      {transactions.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.orderNo}</Text>
          <Text style={[styles.cell, { color: item.trans.includes('+') ? 'green' : 'red' }]}>
            {item.trans}
          </Text>
          <Text style={styles.cell}>{item.balance}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  support: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F9EE',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  supportText: {
    color: '#27AE60',
    fontSize: 12,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#27AE60',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 16,
  },
  limitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  limitLabel: {
    color: '#fff',
    fontSize: 12,
  },
  limitAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionHeader: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentLink: {
    color: '#27AE60',
    fontWeight: '600',
  },
  tableHeader: {
    flexDirection: 'row',
    marginTop: 12,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    fontSize: 12,
  },
});
