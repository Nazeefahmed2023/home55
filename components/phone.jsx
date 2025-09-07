// PhoneLogin.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function PhoneLogin({ navigation }) {
  const [phone, setPhone] = useState('');

  const sendOTP = async () => {
    try {
      const response = await axios.post('http://YOUR_BACKEND_IP:8000/api/send-otp/', { phone });
      if (response.data.success) {
        navigation.navigate('VerifyOTP', { phone });  // go to OTP screen
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={sendOTP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
