import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import Product from '../components/product';

export default function MyNewPage({ navigation }) {
  return (
    <View style={styles.container}>

        
      <Text style={styles.title}>this is product page</Text>
     <Button title="Go Back to product list" onPress={() => router.push('/productlist')} />
        <Button title="Go Back to cart" onPress={() => router.push('/PhoneLoginScreen')} />
     <Product/>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});