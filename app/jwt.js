import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, Button } from 'react-native';
import Jwt from '../components/jwt';

export default function Page() {
  const router = useRouter();

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ marginBottom: 20 }}>This is the JWT page which works</Text>
        <Button title="Go to Category Page" onPress={() => router.push('/category')} />
      </View>

      {/* ✅ Custom JWT Component */}
      <Jwt />
    </ScrollView> // ← Correct closing tag (not self-closing)
  );
}
