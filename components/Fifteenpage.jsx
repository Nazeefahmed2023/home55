import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white pt-10">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text className="text-center text-lg font-semibold mb-6">Order Placed</Text>

        <View className="items-center mb-6">
          <View className="bg-green-500 rounded-full p-6">
            <Ionicons name="checkmark" size={50} color="white" />
          </View>
        </View>

        <Text className="text-center font-semibold text-base text-black mb-4">
          Your Order is Successfully Placed!
        </Text>

        <View className="border border-green-500 rounded-lg p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="home" size={18} color="green" />
            <Text className="ml-2 font-bold">Deliver to Home</Text>
          </View>
          <Text className="text-gray-700">
            #2, 7th Floor, Mantri DSK Pinnacle, Cave Temple Rd, Hulimavu, Bangalore, Karnataka, 560076
          </Text>
          <Text className="mt-2 text-gray-800 font-semibold">
            Prem Kumar, 7892460982, 7892460982
          </Text>
        </View>

        <View className="border rounded-lg p-4 mb-6">
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={20} color="green" />
            <Text className="ml-2 font-semibold">Time Slot</Text>
          </View>
          <Text className="mt-2 text-black">01 Jan 22, Saturday</Text>
          <Text className="text-black font-semibold">06:30 - 07:30 AM</Text>
        </View>

        <TouchableOpacity className="bg-green-600 rounded-full py-4 mt-4">
          <Text className="text-white text-center font-bold text-base">Back to Home</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
