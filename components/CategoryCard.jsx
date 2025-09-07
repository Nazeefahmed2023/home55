import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';

export default function CategoryCard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://192.168.31.16:8000/api/categories/")
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error("❌ Error fetching categories:", error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    width: 120,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
