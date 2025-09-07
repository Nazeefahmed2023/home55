import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import CategoryPage1 from '../components/CategoryPage1';
import FifthCont from '../components/FifthCont';
import SixthCont from '../components/SixthCont';

export default function About() {
        const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={{ marginBottom: 20 }}>ℹ️ This is the Category Page</Text>
        <Button title="Go Back to Home" onPress={() => router.push('/home')} />
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Button title="Go to productlist Page" onPress={() => router.push('/productlist')} />
      </View>

        {/* Render your category content below */}
        <CategoryPage1 />
        <FifthCont />
        <SixthCont />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 10,
  },
});
