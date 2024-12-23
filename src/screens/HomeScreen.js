// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((response) => {
      setMovies(response.data);
    });
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity className="bg-black border rounded-lg h-50 overflow-hidden"
      style={styles.card}
      onPress={() => navigation.navigate('Details', { movie: item.show })}
    >
      <Image className='m-1'
        source={{ uri: item.show.image?.medium || 'https://via.placeholder.com/150' }}
        style={styles.thumbnail}
      />
      <View style={styles.info}>
        <Text className="font-extrabold text-[#df0707] text-xl my-3">{item.show.name}</Text>
        <Text className="truncate text-white font-light pr-2" numberOfLines={4}>
          {item.show.summary?.replace(/<[^>]*>?/gm, '') || 'No summary available.'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View  className="bg-[#564d4d] px-3">
      <TextInput className="border border-red-500 bg-white p-3 rounded-lg mb-10"
        // style={styles.searchBar}
        placeholder="Search Movies..."
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderMovie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
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
  info: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
