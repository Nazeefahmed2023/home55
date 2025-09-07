import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function InteractiveMap() {
  const [location, setLocation] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://192.168.31.239:8000/ws/live-location/');
    socketRef.current.onopen = () => console.log('✅ WebSocket connected');
    socketRef.current.onerror = (err) => console.error('❌ WebSocket error:', err.message);
    return () => socketRef.current?.close();
  }, []);

  // ✅ PASTE THIS BLOCK INSIDE THE COMPONENT like below
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Location permission not granted');
        return;
      }

      if (Platform.OS === 'android') {
        await Location.enableNetworkProviderAsync();
      }

      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setLocation(loc.coords);

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 1,
          mayShowUserSettingsDialog: true,
        },
        (loc) => {
          console.log("📍 Accurate location update:", loc.coords);
          setLocation(loc.coords);

          if (socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({
              delivery_boy_id: 1,
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
            }));
          }
        }
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="You"
            description="Delivery Boy"
          />
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
