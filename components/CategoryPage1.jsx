import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState({});
  const [loadingSubcategory, setLoadingSubcategory] = useState(false);

  const backendUrl = "http://192.168.31.16:8000";

  useEffect(() => {
    fetch(`${backendUrl}/categories/`)
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const fetchSubcategories = (categoryId) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
      return;
    }

    setLoadingSubcategory(true);
    fetch(`${backendUrl}/subcategories/${categoryId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Subcategories not found");
        }
        return response.json();
      })
      .then(data => {
        setSubcategories(prev => ({ ...prev, [categoryId]: data }));
        setExpandedCategoryId(categoryId);
      })
      .catch(error => {
        console.error("Error fetching subcategories:", error);
      })
      .finally(() => setLoadingSubcategory(false));
  };

  const renderCategoryItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => fetchSubcategories(item.id)}>
        {item.image && (
          <Image
            source={{ uri: `${backendUrl}${item.image}` }}
            style={styles.image}
          />
        )}
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>

      {expandedCategoryId === item.id && (
        loadingSubcategory ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <FlatList
            horizontal
            data={subcategories[item.id]}
            keyExtractor={(subItem) => subItem.id.toString()}
            renderItem={({ item: subItem }) => (
              <View style={styles.subcategoryBox}>
                {subItem.image && (
                  <Image
                    source={{ uri: subItem.image }} // ✅ FIXED: Use full image URL directly
                    style={styles.subImage}
                  />
                )}
                <Text style={styles.subText}>{subItem.name}</Text>
              </View>
            )}
          />
        )
      )}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  subcategoryBox: {
    marginTop: 12,
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: 100,
  },
  subImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  subText: {
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CategoryCard;
