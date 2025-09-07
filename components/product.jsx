import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { subcategoryId } = route.params;

  const backendUrl = 'http://192.168.31.16:8000';

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/products/${subcategoryId}/`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('❌ Error fetching products:', error))
      .finally(() => setLoading(false));
  }, [subcategoryId]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <Text>No image</Text>
      )}
      <Text style={styles.name}>{item.name}</Text>
      {item.description && <Text>{item.description}</Text>}
      <Text style={styles.price}>₹{item.price}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />;
  }

  if (products.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No products found for this subcategory.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});
