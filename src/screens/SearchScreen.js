// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      .then((response) => {
        setResults(response.data);
      });
  };

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { movie: item.show })}
    >
      <Image
        source={{ uri: item.show.image?.medium || 'https://via.placeholder.com/150' }}
        style={styles.thumbnail}
      />
      <Text style={styles.title}>{item.show.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a movie..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderMovie}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:20
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SearchScreen;
