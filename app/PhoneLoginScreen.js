import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const OtpLoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://192.168.31.239:8000/send-otp/', { phone });
      console.log('OTP sent:', response.data);
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://192.168.31.239:8000/verify-otp/', { phone, otp });
      console.log('OTP verified:', response.data);
      if (response.data.status === 'success') {
        Alert.alert('Success', 'Login successful');
        navigation.navigate('Home'); // Change 'Home' to your home screen name
      } else {
        Alert.alert('Error', 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      Alert.alert('Error', 'OTP verification failed');
    }
  };

  return (
    <View style={styles.container}>
      {!otpSent ? (
        <>
          <Text style={styles.label}>Enter Phone Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholder="e.g. 9876543210"
          />
          <Button title="Send OTP" onPress={sendOtp} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Enter OTP:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
            placeholder="Enter the OTP"
          />
          <Button title="Verify OTP" onPress={verifyOtp} />
        </>
      )}
    </View>
  );
};

export default OtpLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
