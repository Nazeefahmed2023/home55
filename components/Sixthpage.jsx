import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = 'http://192.168.31.16:8000/api';

export default function DeliveryScreen() {
  const [selectedDate, setSelectedDate] = useState('03');
  const [selectedSlot, setSelectedSlot] = useState('Less than 45 mins');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [instructions, setInstructions] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAddresses();
    fetchCartTotal();
  }, []);

  const fetchAddresses = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await fetch(`${API_BASE}/address/list/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
        if (data.length > 0) setSelectedAddress(data[0].id);
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const fetchCartTotal = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const response = await fetch(`${API_BASE}/cart/view/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        const total = data.items?.reduce(
          (sum, item) => sum + (item.product.discounted_price * item.quantity),
          0
        ) || 0;
        setCartTotal(total);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    if (!selectedAddress) {
      Alert.alert('Error', 'Please select an address');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('access_token');
      
      // Create order
      const orderResponse = await fetch(`${API_BASE}/checkout/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address_id: selectedAddress,
        }),
      });

      if (orderResponse.ok) {
        const orderData = await orderResponse.json();
        
        // Process payment
        const paymentResponse = await fetch(`${API_BASE}/payment/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            order_id: orderData.order_id,
            payment_method: paymentMethod,
          }),
        });

        if (paymentResponse.ok) {
          Alert.alert('Success', 'Order placed successfully!');
        } else {
          Alert.alert('Error', 'Payment failed');
        }
      } else {
        Alert.alert('Error', 'Failed to create order');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00A86B" style={{ marginTop: 50 }} />;
  }

  const slots = ['Less than 45 mins', '10:00 – 01:00 AM', '02:00 – 04:00 PM', '04:00 – 06:00 PM'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Address & Slot</Text>

      {addresses.length > 0 ? (
        <View style={styles.addressContainer}>
          <Icon name="location-outline" size={20} color="#00A86B" />
          <Text style={styles.addressLabel}>Selected Address</Text>
          <Text style={styles.addressText}>
            {addresses.find(addr => addr.id === selectedAddress)?.full_address || 'No address selected'}
          </Text>
        </View>
      ) : (
        <Text style={styles.noAddress}>No addresses found. Please add an address first.</Text>
      )}

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
          style={[styles.paymentButton, paymentMethod === 'Online' && styles.paymentSelected]}
          onPress={() => setPaymentMethod('Online')}
        >
          <Text style={styles.paymentText}>Pay Online</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentButton, paymentMethod === 'COD' && styles.paymentSelected]}
          onPress={() => setPaymentMethod('COD')}
        >
          <Text style={styles.paymentText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹{cartTotal}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
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
  noAddress: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
