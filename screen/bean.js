import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Bean() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setPrediction('');
    }
  };

  const handlePrediction = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      try {
        const response = await fetch('https://diseaseback.onrender.com/predict/beans', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        setPrediction(data.prediction);
      } catch (error) {
        console.error('Prediction Error:', error);
      }
    }
  };

  return (
    <ImageBackground
    source={require('../page/aa.jpg')} // Add your background image source
    style={styles.background}
  >
    <View style={styles.container}>
      <Text style={styles.heading}>Disease Detection</Text>
      <TouchableOpacity onPress={handleImageUpload} style={styles.fileInput}>
        <Text>Choose Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePrediction} style={styles.predictButton}>
        <Text style={{ color: 'white' }}>Check</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      {prediction ? (
        <Text style={styles.predictionText}>Disease: {prediction}</Text>
      ) : null}
      <View style={styles.space} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Make the background image cover the entire screen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  fileInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  predictButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
  },
  predictionText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  selectedImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  space: {
    height: 20,
  },
});
