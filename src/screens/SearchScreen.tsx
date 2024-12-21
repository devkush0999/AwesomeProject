import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    if (!query.trim()) return;

    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Type to search..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  searchBar: { height: 40, backgroundColor: '#333', color: '#fff', margin: 10, paddingHorizontal: 10, borderRadius: 5 },
});

export default SearchScreen;
