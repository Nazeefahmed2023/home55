import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = 'http://192.168.31.16:8000/api';
const categories = ['Fruits', 'Vegetables', 'Exotics', 'Freshly'];

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE}/products/`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      if (!token) {
        Alert.alert('Error', 'Please login first');
        return;
      }

      const response = await fetch(`${API_BASE}/cart/add/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: productId,
          quantity: 1,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Item added to cart!');
      } else {
        Alert.alert('Error', 'Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />;
  }
  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerLeft}>
          <Text style={styles.bannerDiscount}>Upto{"\n"}10% OFF</Text>
        </View>
        <View style={styles.bannerRight}>
          <Text style={styles.bannerText}>FREE{"\n"}HOME{"\n"}DELIVERY</Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {categories.map((cat, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.categoryButton,
              cat === 'Vegetables' && styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                cat === 'Vegetables' && styles.activeCategoryText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product List */}
      <Text style={styles.productCount}>{products.length} Products</Text>

      {products.map((item) => (
        <View key={item.id} style={styles.productCard}>
          {/* Discount Badge */}
          {item.discount_percentage > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{item.discount_percentage}% off</Text>
            </View>
          )}

          {/* Product Image */}
          <Image 
            source={{ uri: item.image || 'https://via.placeholder.com/80' }} 
            style={styles.productImage} 
          />

          {/* Product Details */}
          <View style={styles.details}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productWeight}>{item.description || 'Fresh product'}</Text>
            <View style={styles.rowBetween}>
              <Text style={styles.price}>
                ₹{item.discounted_price} 
                {item.discount_percentage > 0 && (
                  <Text style={styles.originalPrice}> ₹{item.price}</Text>
                )}
              </Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => addToCart(item.id)}
              >
                <Ionicons name="add" size={18} color="#2ecc71" />
                <Text style={styles.addText}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#f60',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  bannerLeft: {
    justifyContent: 'center',
  },
  bannerDiscount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerRight: {
    justifyContent: 'center',
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  activeCategory: {
    backgroundColor: '#d4fcd4',
    borderColor: '#2ecc71',
  },
  categoryText: {
    color: '#000',
  },
  activeCategoryText: {
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  productCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    padding: 10,
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    backgroundColor: '#27ae60',
    padding: 4,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  productWeight: {
    color: '#7f8c8d',
    fontSize: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 14,
  },
  addButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
  },
  addText: {
    color: '#2ecc71',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});