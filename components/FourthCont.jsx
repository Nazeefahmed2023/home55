import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const foodItems = [
  { name: 'Biriyani', image: require('../assets/biryani.jpg') },
  { name: 'Chicken 65', image: require('../assets/roll.jpg') },
  { name: 'Fried Rice', image: require('../assets/friedrice.jpg') },
  { name: 'Pizza', image: require('../assets/pizza.jpg') },
  { name: 'Ice Cream', image: require('../assets/ice-cream.jpg') },
  { name: 'Rolls', image: require('../assets/kabab.jpg') },
  { name: 'Fresh Juice', image: require('../assets/juice.jpg') },
  { name: 'Burger', image: require('../assets/burger.jpg') },
];

const numColumns = 4;
const itemSize = Dimensions.get('window').width / numColumns;

export default function FoodMenu() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What you want to eat?</Text>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  list: {
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    width: itemSize - 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
