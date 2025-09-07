import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const initialItems = [
  {
    id: '1',
    name: 'Apple',
    price: 30,
    image: 'https://via.placeholder.com/80?text=Apple',
  },
  {
    id: '2',
    name: 'Banana',
    price: 20,
    image: 'https://via.placeholder.com/80?text=Banana',
  },
];

export default function ExampleScreen() {
  const [cartItems, setCartItems] = useState(initialItems);
  const [quantities, setQuantities] = useState(
    initialItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1),
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantities[item.id]}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => increaseQuantity(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFromCart(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Cart Items</Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.footerContainer}>
          {/* Billing Details Section */}
          <View style={styles.billingContainer}>
            <Text style={styles.billingTitle}>Billing Details</Text>
            <View style={styles.billingRow}>
              <Text>MRP</Text>
              <Text>₹{total + 18 - 27}</Text>
            </View>
            <View style={styles.billingRow}>
              <Text>Coupon Code Discount</Text>
              <Text>– ₹00</Text>
            </View>
            <View style={styles.billingRow}>
              <Text>Discount Amount</Text>
              <Text>– ₹18</Text>
            </View>
            <View style={styles.billingRow}>
              <Text>Delivery & Service Charges</Text>
              <Text>₹27</Text>
            </View>
            <View style={styles.billingRowTotal}>
              <Text style={styles.billTotalLabel}>Bill Total</Text>
              <Text style={styles.billTotal}>₹{total}</Text>
            </View>
          </View>

          {/* Checkout Button */}
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      }
      contentContainerStyle={{ paddingBottom: 100 }}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={{ fontSize: 18, color: '#888' }}>Your cart is empty</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: '#eee' },
  title: { fontSize: 20, fontWeight: 'bold' },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  image: { width: 80, height: 80, marginRight: 15 },
  itemInfo: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: '500' },
  price: { fontSize: 14, color: 'gray', marginTop: 4 },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: { fontSize: 16 },
  quantityText: { fontSize: 16, fontWeight: 'bold' },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 14,
  },

  footerContainer: {
    padding: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  billingContainer: {
    width: '100%',
    marginBottom: 20,
  },
  billingTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  billingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  billingRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
  },
  billTotalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  billTotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  empty: {
    alignItems: 'center',
    padding: 40,
  },
});
