import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function App() {
  const [selectedWeight, setSelectedWeight] = useState(null);

  const weights = [
    { label: '1 kg', available: true },
    { label: '1.5 kg', available: true },
    { label: '2 kg', available: true },
    { label: '5 kg', available: false },
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        source={require('../assets/pyaaz.jpg')}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.carouselDotsWrapper}>
        {[1, 2, 3, 4].map((_, i) => (
          <View key={i} style={[styles.carouselDot, i === 0 && styles.carouselDotActive]} />
        ))}
      </View>

      <Text style={styles.productTitle}>Fresh Onion multi variants</Text>

      <View style={styles.pricingWrapper}>
        <Text style={styles.pricingCurrent}>₹39</Text>
        <Text style={styles.pricingOld}> ₹42 </Text>
        <Text style={styles.pricingDiscount}>23% OFF</Text>
      </View>

      <Text style={styles.availableLabel}>Available in</Text>

      <View style={styles.weightOptionWrapper}>
        {weights.map((item, index) => (
          <TouchableOpacity
            key={index}
            disabled={!item.available}
            style={[
              styles.weightOption,
              selectedWeight === index && styles.weightOptionSelected,
              !item.available && styles.weightOptionOutOfStock,
            ]}
            onPress={() => setSelectedWeight(index)}
          >
            <Text style={{ color: item.available ? '#000' : 'gray' }}>
              {item.label}
            </Text>
            {!item.available && <Text style={styles.outOfStockLabel}>Out of Stock</Text>}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.productDetailsBox}>
        <Text style={styles.productDetailsHeading}>Product Details</Text>
        <Text style={styles.productDetailsText}>
          Onion is a staple in India and is commonly chopped and used as an ingredient in various hearty warm dishes. They are versatile and can be baked, boiled, braised, grilled, fried, roasted or eaten raw in salads.
        </Text>
      </View>

      <View style={styles.additionalInfoSection}>
        <Text style={styles.infoLabel}>Product Life</Text>
        <Text style={styles.infoValue}>7 Days</Text>

        <Text style={styles.infoLabel}>Product Brand</Text>
        <Text style={styles.infoValue}>Grocermart</Text>

        <Text style={styles.infoLabel}>Storage Tips</Text>
        <Text style={styles.infoValue}>
          Store in wire-basket or mesh bags with temperature of 7–13 degree Celsius.
        </Text>

        <Text style={styles.infoLabel}>Disclaimer</Text>
        <Text style={styles.infoValue}>
          Every effort is made to maintain the accuracy of all information. However, actual product packaging and material may contain more and/or different information. It is recommended not to solely rely on the information present.
        </Text>

        <View style={styles.bottomActionRow}>
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome name="heart-o" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrapper}>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartActionButton}>
            <Ionicons name="cart-outline" size={20} color="white" />
            <Text style={styles.cartActionText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  carouselDotsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  carouselDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  carouselDotActive: {
    backgroundColor: 'green',
    width: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  pricingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  pricingCurrent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  pricingOld: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginLeft: 10,
  },
  pricingDiscount: {
    color: 'green',
    marginLeft: 10,
    fontWeight: '600',
  },
  availableLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
  weightOptionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  weightOption: {
    padding: 10,
    backgroundColor: '#e6ffe6',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  weightOptionSelected: {
    backgroundColor: '#ccffcc',
    borderColor: '#009900',
  },
  weightOptionOutOfStock: {
    backgroundColor: '#f2f2f2',
    borderColor: '#ccc',
  },
  outOfStockLabel: {
    color: 'gray',
    fontSize: 10,
  },
  productDetailsBox: {
    marginTop: 20,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 12,
  },
  productDetailsHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productDetailsText: {
    fontSize: 14,
    color: '#555',
  },
  additionalInfoSection: {
    paddingTop: 16,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 14,
  },
  infoValue: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
    lineHeight: 18,
  },
  bottomActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 12,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartActionButton: {
    flexDirection: 'row',
    backgroundColor: '#3ca22d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  cartActionText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
