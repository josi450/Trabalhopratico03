import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import FeriadosListScreen from '../../screens/FeriadosListScreen';
import PersonScreen from './PersonScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: tw`bg-blue-800 p-2`,
      }}
    >
      <Stack.Screen name="FeriadosListScreen" component={FeriadosListScreen} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
