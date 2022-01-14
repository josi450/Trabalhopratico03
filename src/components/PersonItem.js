import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PersonItem = ({ person }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PersonScreen', { person: person })}
      style={tw`p-1.5 bg-green-600 m-1 rounded-lg`}
    >
      <Text style={tw` text-black-200`}>{person.name}</Text>
      <Text style={tw` text-red-900`}>{person.localName}</Text>
    </TouchableOpacity>
  );
};

export default PersonItem;

const styles = StyleSheet.create({});
