import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

const BlankPageLoading = () => {
  return (
    <SafeAreaView>
      <Header />
      <ActivityIndicator size={25} color="#98FB98" />
    </SafeAreaView>
  );
};

export default BlankPageLoading;

const styles = StyleSheet.create({});
