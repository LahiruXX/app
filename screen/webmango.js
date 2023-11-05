// import React, { useState } from 'react';

// export default function Mango() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [prediction, setPrediction] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   const handlePrediction = () => {
//     if (selectedImage) {
//       const formData = new FormData();
//       formData.append('image', selectedImage);

//       fetch('https://mangoback.onrender.com/predict', {
//         method: 'POST',
//         body: formData,
//       })
//         .then(response => response.json())
//         .then(data => {
//           setPrediction(data.prediction);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Disease Detection</h1>
//       <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.fileInput} />
//       <button onClick={handlePrediction} style={styles.predictButton}>Predict</button>
//       <div style={styles.space} />
//       {prediction && <p style={styles.predictionText}>Predicted Disease: {prediction}</p>}
//       <div style={styles.space} />
//       {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={styles.selectedImage} />}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '20vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   },
//   fileInput: {
//     display: 'block',
//     margin: '0 auto',
//     marginBottom: '20px',
//   },
//   predictButton: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px 20px',
//     cursor: 'pointer',
//   },
//   predictionText: {
//     marginTop: '20px',
//     fontSize: '18px',
//   },
//   selectedImage: {
//     marginTop: '20px',
//     maxWidth: '100%',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//   },
// };
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Mango() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePrediction = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      fetch('https://mangoback.onrender.com/predict', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          setPrediction(data.prediction);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Disease Detection</Text>
      <TouchableOpacity onPress={handleImageUpload} style={styles.fileInput}>
        <Text>Choose Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePrediction} style={styles.predictButton}>
        <Text style={{ color: 'white' }}>Predict</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      {prediction && <Text style={styles.predictionText}>Predicted Disease: {prediction}</Text>}
      <View style={styles.space} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
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
