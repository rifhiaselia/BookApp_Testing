import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register/Index';
import SplashScreen from '../Pages/SplashScreen';
import Success from '../Pages/Success';
import BookDetail from '../Pages/BookDetail';
import VideoPlay from '../Pages/VideoPlay';
import PdfRead from '../Pages/PdfRead';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="SplachScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlay"
        component={VideoPlay}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PdfRead"
        component={PdfRead}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
