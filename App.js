import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/home';
import MangoScreen from './screen/mango';
import GrapeScreen from './screen/grape';
import BellPepperScreen from './screen/bellpepper';
import PotatoScreen from './screen/potato';
import BeanScreen from './screen/bean';
import CornScreen from './screen/corn';
import LocationPredictor from './screen/LocationPredictor';
import MainHome from './screen/mainhome';
import Login from './screen/login';
import Register from './screen/register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mango" component={MangoScreen} />
        <Stack.Screen name="Grape" component={GrapeScreen} />
        <Stack.Screen name="Bean" component={BeanScreen} />
        <Stack.Screen name="BellPepper" component={BellPepperScreen} />
        <Stack.Screen name="Potato" component={PotatoScreen} />
        <Stack.Screen name="Corn" component={CornScreen} />
        <Stack.Screen name="Location" component={LocationPredictor} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
