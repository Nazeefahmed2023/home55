import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Required for navigation
import InteractiveMap from '../components/InteractiveMap';

export default function Home() {
  const router = useRouter(); // ✅ Get router object

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <InteractiveMap />
        <Button
        title="Go to Deliver Map"
        onPress={() => router.push('/product')} // ✅ Navigate to the screen
      />
    </SafeAreaView>
  );
}
