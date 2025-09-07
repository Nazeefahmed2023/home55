import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Email and password are required');
            return;
        }

        console.log("Login Payload:", { email, password });

        try {
            const response = await fetch('http://192.168.31.16:8000/api/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password }),
            });

            const data = await response.json();
            console.log("Response:", data);

            if (response.status === 200) {
                // Store tokens
                await AsyncStorage.setItem('access_token', data.access_token);
                await AsyncStorage.setItem('refresh_token', data.refresh_token);
                await AsyncStorage.setItem('user_id', data.user_id.toString());
                
                Alert.alert('Success', 'Logged in successfully!');
                router.replace('/home');
            } else if (response.status === 400) {
                Alert.alert('Login Failed', data.error || 'Invalid credentials');
            } else {
                Alert.alert('Error', 'Something went wrong');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Cannot connect to server. Make sure your Django server is running and reachable.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <Text
                style={styles.registerText}
                onPress={() => router.push('/register')}
            >
                Don't have an account? Register
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, flexGrow: 1, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15 },
    registerText: { marginTop: 20, textAlign: 'center', color: 'blue' },
});
