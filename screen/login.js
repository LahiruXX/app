import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';


const Login = ({ navigation }) => {

    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const req = { mail, password };
        try {
            const response = await axios.post('https://eadpvtltd.azurewebsites.net/api/Login/UserLogin', req);
            if (response.status === 200) {
                //Change This
                navigation.navigate('MainHome');
            } else {
                Alert.alert('Error', 'Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <ImageBackground
            source={require('../page/aa.jpg')} // Add your background image source
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to GreenWish</Text>
                <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", paddingTop: 175, }}> Login</Text>
                <View style={{ paddingTop: 30 }}></View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={mail}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Password"
                    style={[styles.input]}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={{ paddingBottom: 30 }}></View>
                <View style={{ width: 150 }}> {/* Add a View with a width of 200 pixels */}
                    <Button title="Login" onPress={handleLogin} />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Make the background image cover the entire screen
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background overlay
        paddingTop: 25
    },
    title: {
        fontSize: 24,
        // marginBottom: 30,
        color: 'white', // Title text color
        fontWeight: 'bold',
    },

});

export default Login;
