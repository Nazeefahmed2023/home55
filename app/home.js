import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, Button } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import SecondCont from '../components/SecondCont';
import ThirdCont from '../components/ThirdCont';
import FourthCont from '../components/FourthCont';
import FifthCont from '../components/FifthCont';
import SixthCont from '../components/SixthCont';
import Maps from '../components/Maps'
export default function Page() {
      const router = useRouter();
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 20 }}>🏠 This is the Home Page</Text>
        <Button title="Go to About Page" onPress={() => router.push('/category')} />
      </View>

      {/* ✅ No commas between components */}
      <CategoryCard />
      <SecondCont />
      <ThirdCont />
      <FourthCont />
      <FifthCont />
      <SixthCont />
      <Maps/>
    </ScrollView>
  );
}
