import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const MainHome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../page/aa.jpg')} // Add your background image source
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to GreenWish</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Location')}
        >
          <Text style={styles.buttonText}>Location Predict</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.diseaseButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Disease Predict</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Make the background image cover the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background overlay
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: 'white', // Title text color
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(0, 122, 255, 0.7)', // Semi-transparent blue button background
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  diseaseButton: {
    backgroundColor: 'rgba(255, 59, 48, 0.7)', // Semi-transparent red button background
  },
});

export default MainHome;
