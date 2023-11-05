import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../page/aa.jpg')} // Update with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Crop !</Text>
        <Text style={styles.subtitle}>Secure Your Plant</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Mango')}
            style={[styles.button, styles.mangoButton]}
          >
            <Text style={styles.buttonText}>Mango Plant</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Bean')}
            style={[styles.button, styles.beanButton]}
          >
            <Text style={styles.buttonText}>Bean Plant</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Corn')}
            style={[styles.button, styles.cornButton]}
          >
            <Text style={styles.buttonText}>Corn Plant</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Grape')}
            style={[styles.button, styles.grapeButton]}
          >
            <Text style={styles.buttonText}>Grape Plant</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Potato')}
            style={[styles.button, styles.potatoButton]}
          >
            <Text style={styles.buttonText}>Potato Plant</Text>
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            onPress={() => navigation.navigate('BellPepper')}
            style={[styles.button, styles.pepperButton]}
          >
            <Text style={styles.buttonText}>Bell Pepper Plant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can also use 'contain' or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  space: {
    height: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  mangoButton: {
    backgroundColor: '#007bff',
  },
  beanButton: {
    backgroundColor: '#28a745',
  },
  cornButton: {
    backgroundColor: '#ffc107',
  },
  grapeButton: {
    backgroundColor: '#17a2b8',
  },
  potatoButton: {
    backgroundColor: '#dc3545',
  },
  pepperButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: 'white',
  },
});
