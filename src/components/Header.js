import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View
      style={tw`flex-row justify-center pb-2 mb-4 border-b-2 border-blue-400 relative`}
    >
      <FontAwesome name="check" size={25} color="#FFC0CB" />
      <Text style={tw`text-2xl text-red-700 ml-2`}>Feriados em 2022</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
