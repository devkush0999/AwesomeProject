// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: true , headerStyle: { backgroundColor: '#564d4d' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Splash" component={SplashScreen} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{ headerShown: false , title: 'Awesome app'}}/>
      <Stack.Screen name="Search" component={SearchScreen} screenOptions={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailsScreen} screenOptions={{ headerShown: true }}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
