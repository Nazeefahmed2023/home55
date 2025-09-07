import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const orders = [
  {
    id: '#AMI12049',
    date: '01 Jan 22',
    items: 12,
    eta: 'Within 45 Mins',
    products: [
      { name: 'Turmeric powder 100gm X 1', price: 156 },
      { name: 'Sugar 1 Kg X 1', price: 58 },
      { name: 'Idly Rice 5 Kg X 1', price: 98 },
      { name: 'Basmathi Rice 5 Kg X 2', price: 34 },
    ],
    total: '₹3,041',
    status: 'Out for Delivery',
    statusIcon: 'car-outline',
  },
  {
    id: '#AMI12256',
    date: '01 Jan 22',
    items: 6,
    eta: 'Within 45 Mins',
    products: [
      { name: 'Turmeric powder 100gm X 1', price: 156 },
      { name: 'Sugar 1 Kg X 1', price: 58 },
      { name: 'Idly Rice 5 Kg X 1', price: 98 },
      { name: 'Basmathi Rice 5 Kg X 2', price: 34 },
    ],
    total: '₹341',
    status: 'Delivered to Prem',
    statusIcon: 'checkmark-done-outline',
  },
];

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Orders List</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>All Orders</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#006400" />
        </TouchableOpacity>
      </View>

      {orders.map((order, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.orderId}>{order.id}</Text>
            <Text style={styles.date}>{order.date}</Text>
          </View>
          <View style={styles.subHeader}>
            <Text>{order.items} Items</Text>
            <Text>{order.eta}</Text>
          </View>
          <View style={styles.productList}>
            {order.products.map((p, i) => (
              <View key={i} style={styles.productRow}>
                <Text style={styles.productText}>{i + 1}. {p.name}</Text>
                <Text style={styles.priceText}>{p.price}</Text>
              </View>
            ))}
            <View style={styles.totalRow}>
              <Text style={[styles.productText, { fontWeight: 'bold' }]}>Total Amount</Text>
              <Text style={[styles.priceText, { fontWeight: 'bold' }]}>{order.total}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.status}>
              <Ionicons name={order.statusIcon} size={18} color="#006400" />
              <Text style={styles.statusText}>{order.status}</Text>
            </View>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.buttonText}>View in Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  dropdownText: {
    color: '#006400',
    fontWeight: 'bold',
    marginRight: 4,
  },
  card: {
    borderColor: '#a0d6a7',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderId: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#777',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 8,
  },
  productList: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingTop: 8,
    marginBottom: 8,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  productText: {
    fontSize: 14,
    color: '#333',
  },
  priceText: {
    fontSize: 14,
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    color: '#006400',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  detailButton: {
    backgroundColor: '#006400',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
