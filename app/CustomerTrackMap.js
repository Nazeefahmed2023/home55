import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function CustomerTrackMap() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://<YOUR-BACKEND-IP>:8000/ws/live-location/");

    socket.onopen = () => {
      console.log("WebSocket connected (customer)");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received delivery boy location:", data);
      setLocation({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    };

    socket.onerror = (e) => console.log("WebSocket error", e);
    socket.onclose = () => console.log("WebSocket closed");

    return () => socket.close();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {location && (
          <Marker coordinate={location} title="Delivery Boy" />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
