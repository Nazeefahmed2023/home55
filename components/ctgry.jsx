import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


export default function AllCategoriesScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={30} color="green" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Categories</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Card 1 - Vegetables and Fruits */}
        <View style={styles.card}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>23%\noff</Text>
          </View>
          <Image source={require('')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Vegetables and fruits(41)</Text>
            <Text style={styles.subtitle}>Exotics, Fruits, Vegetables, Freshly Cut & Sprouts, Flowers</Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" style={styles.dropdownIcon} />
        </View>

        {/* Card 2 - Eggs & Meats */}
        <View style={styles.card}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>08%\noff</Text>
          </View>
          <Image source={require('')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Eggs & Meats(8)</Text>
            <Text style={styles.subtitle}>Eggs, Chicken, Mutton, Pork, Frozen & Canned Food</Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="black" style={styles.dropdownIcon} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'green',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 1,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
  dropdownIcon: {
    marginLeft: 10,
  },
});
