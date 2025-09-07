import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function DeliveryMap() {
  const [location, setLocation] = useState(null);
  const socket = useRef(null);

  useEffect(() => {
    const startTracking = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (loc) => {
          const coords = loc.coords;
          setLocation(coords);

          if (socket.current && socket.current.readyState === WebSocket.OPEN) {
            socket.current.send(
              JSON.stringify({
                delivery_boy_id: 1,
                latitude: coords.latitude,
                longitude: coords.longitude,
              })
            );
          }
        }
      );
    };

    socket.current = new WebSocket("ws://<YOUR-BACKEND-IP>:8000/ws/live-location/");

    socket.current.onopen = () => {
      console.log("WebSocket connected (delivery)");
    };

    socket.current.onerror = (e) => console.log("WebSocket error", e);
    socket.current.onclose = () => console.log("WebSocket closed");

    startTracking();

    return () => {
      socket.current?.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="Delivery Boy" />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
