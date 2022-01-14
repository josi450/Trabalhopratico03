import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import BlankPageLoading from '../src/components/BlankPageLoading';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../src/components/Header';
import tw from 'twrnc';
import api from '../src/services/api';
import PersonItem from '../src/components/PersonItem';

const FeriadosListScreen = () => {
  const [feriado, setFeriado] = useState([]);

  useEffect(() => {
    async function loadFeriados() {
      const result = await api.get();

      setFeriado(result.data);
    }
    loadFeriados();
  }, []);

  //Pagina vazia

  if (feriado.length == 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView>
      <Header />

      <FlatList
        data={feriado}
        renderItem={({ item }) => <PersonItem person={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default FeriadosListScreen;

const styles = StyleSheet.create({});
