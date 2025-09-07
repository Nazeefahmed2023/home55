import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RoundIconWithText = ({ imageSource, text }) => (
  <View style={styles.iconContainer}>
    <Image source={imageSource} style={styles.icon} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const ThirdCont = () => {
  return (
    <View>
      <Text style={styles.heading}>Top picks for you</Text>

      <ScrollView horizontal contentContainerStyle={styles.container}>
        <RoundIconWithText imageSource={require('../assets/subway.png')} text="Icon 1" />
        <RoundIconWithText imageSource={require('../assets/starbriyani.png')} text="Icon 2" />
        <RoundIconWithText imageSource={require('../assets/kfc.png')} text="Icon 3" />
        <RoundIconWithText imageSource={require('../assets/dminos.png')} text="Icon 4" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ThirdCont;
