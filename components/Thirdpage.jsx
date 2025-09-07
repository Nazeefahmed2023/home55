import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['Fruits', 'Vegetables', 'Exotics', 'Freshly'];

const products = [
  {
    id: '1',
    name: 'Fresh Onion',
    weight: '1 kg',
    discount: '23%',
    price: 39,
    originalPrice: 42,
    image: require('../assets/pyaaz.jpg'), // Replace with your image path
  },
];

export default function ProductListScreen() {
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
      <Text style={styles.productCount}>12 Products</Text>

      {products.map((item) => (
        <View key={item.id} style={styles.productCard}>
          {/* Discount Badge */}
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount} off</Text>
          </View>

          {/* Product Image */}
          <Image source={item.image} style={styles.productImage} />

          {/* Product Details */}
          <View style={styles.details}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.rowBetween}>
              <Text style={styles.productWeight}>{item.weight}</Text>
              <Ionicons name="chevron-down" size={16} color="gray" />
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.price}>₹{item.price} <Text style={styles.originalPrice}>₹{item.originalPrice}</Text></Text>
              <TouchableOpacity style={styles.addButton}>
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