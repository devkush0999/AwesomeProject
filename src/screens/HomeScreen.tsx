import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
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

export default HomeScreen;
