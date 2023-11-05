import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LocationPredictor() {
  const [name, setName] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [bestLocations, setBestLocations] = useState([]);
  const soilTypes = ['Alluvial Soil', 'Bog and Half Bog Soil', 'Grumusol Soil', 'Immature Brown Loam Soil', 'Low Humic Gley Soil', 'Meadow Podzolic Soil', 'Non Calcic Brown Soil', 'Red Yellow Latosol Soil', 'Red Yellow Podzolic Soil', 'Reddish Brown Earth Soil', 'Reddish Brown Lateritic Soil', 'Rendzina Soil', 'Solodized Solonetz Soil', '', '', ''];
  const [showSoilTypeModal, setShowSoilTypeModal] = useState(false);
  const [soilType, setSoilType] = useState('');

  const handleSoilTypeSelect = (soilType) => {
    setSoilType(soilType);
    setShowSoilTypeModal(false);
  };

  const save = async () => {
    const location = { Rainfall: parseFloat(rainfall), Temp: parseFloat(temp), Humidity: parseFloat(humidity), Soil_Type: soilType };

    try {
      const response = await axios.post('https://locationback.onrender.com/predict', location);
      const { Best_Locations } = response.data;

      // Store the result in AsyncStorage
      await AsyncStorage.setItem('bestLocations', JSON.stringify(Best_Locations));
      setBestLocations(Best_Locations);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../page/img.jpg')} // Update with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Predict Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Plant Name"
          placeholderTextColor="black"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Rainfall"
          placeholderTextColor="black"
          onChangeText={(text) => setRainfall(text)}
          value={rainfall}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Temperature"
          placeholderTextColor="black"
          onChangeText={(text) => setTemp(text)}
          value={temp}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Humidity"
          placeholderTextColor="black"
          onChangeText={(text) => setHumidity(text)}
          value={humidity}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.input, styles.customDropdown]}
          onPress={() => setShowSoilTypeModal(true)}
        >
          <Text style={styles.dropdownText}>{soilType || 'Select Soil Type'}</Text>
        </TouchableOpacity>
        {/* Soil Type Modal */}
        <Modal
          visible={showSoilTypeModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <ScrollView style={styles.scrollView}>
              {soilTypes.map((soilType, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modalItem}
                  onPress={() => handleSoilTypeSelect(soilType)}
                >
                  <Text style={styles.modalItemText}>{soilType}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => setShowSoilTypeModal(false)}
            >
              <Text style={styles.modalItemText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {/* Custom "Process" Button */}
        <TouchableOpacity
          style={styles.processButton}
          onPress={save}
        >
          <Text style={styles.buttonText}>Process</Text>
        </TouchableOpacity>
        {bestLocations.length > 0 && (
          <Text style={styles.result}>Best Location: {bestLocations.join(', ')}</Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    marginBottom: 16,
    color: '#333',
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  result: {
    marginTop: 16,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  customDropdown: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  dropdownText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalItem: {
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
  },
  processButton: {
    backgroundColor: '#007AFF', // Button background color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LocationPredictor;
