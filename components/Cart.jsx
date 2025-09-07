import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = 'http://192.168.31.16:8000/api';

export default function Cart() {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      if (!token) {
        Alert.alert('Error', 'Please login first');
        return;
      }

      const response = await fetch(`${API_BASE}/cart/view/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartData(data);
      } else {
        console.error('Failed to fetch cart');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (cartItemId, newQuantity) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await fetch(`${API_BASE}/cart/update/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart_item_id: cartItemId,
          quantity: newQuantity,
        }),
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await fetch(`${API_BASE}/cart/remove/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart_item_id: cartItemId }),
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image 
        source={{ uri: item.product.image || 'https://via.placeholder.com/80' }} 
        style={styles.image} 
      />
      <View style={styles.itemInfo}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>₹{item.product.discounted_price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
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

  const total = cartData?.items?.reduce(
    (sum, item) => sum + (item.product.discounted_price * item.quantity),
    0
  ) || 0;

  return (
    <FlatList
      data={cartData?.items || []}
      keyExtractor={(item) => item.id.toString()}
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
