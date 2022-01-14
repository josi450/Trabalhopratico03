import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

const PersonScreen = ({ route }) => {
  const { person } = route.params;

  return (
    <SafeAreaView>
      <Header />

      {/*Nome do feriado*/}
      <Text style={tw`text-3xl text-gray-400 text-center mb-4`}>
        {person.localName}
      </Text>

      {/*Data*/}
      <Text style={tw`text-2xl text-red-500 mb-4`}>Data: {person.date}</Text>

      {/*País local*/}
      <Text style={tw`text-2xl text-yellow-400 mb-4`}>
        País local: {person.countryCode}
      </Text>
    </SafeAreaView>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({});
