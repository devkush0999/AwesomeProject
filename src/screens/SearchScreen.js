// src/screens/SearchScreen.js
import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
      .then(response => {
        setResults(response.data);
      });
  };

  const renderMovie = ({item}) => (
    <TouchableOpacity
      className="bg-black border rounded-lg h-50 overflow-hidden"
      style={styles.card}
      onPress={() => navigation.navigate('Details', {movie: item.show})}>
      <Image
        className="p-1"
        source={{
          uri: item.show.image?.medium || 'https://via.placeholder.com/150',
        }}
        style={styles.thumbnail}
      />
      <View style={styles.content}>
        <Text
          style={styles.title}
          className="font-extrabold text-red-600 text-xl my-2">
          {item.show.name}
        </Text>
        <Text className="text-white border border-white rounded-full p-2">
          Rating : {item.show.rating.average} ⭐️ language: {item.show.language}
        </Text>

        <Text
          className="overflow-hidden text-white font-light my-2"
          numberOfLines={2}>
          {item.show.summary?.replace(/<[^>]*>?/gm, '') ||
            'No summary available.'}
        </Text>

        <Text style={styles.info} className="font-light text-[#fff] ">
          🏢 Network: {item.show.network?.name || 'N/A'} (
          {item.show.network?.country?.name || 'N/A'})
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      className="bg-[#564d4d] p-2 h-full"
      // style={styles.container}
    >
      <TextInput
        className="border border-red-500 bg-white p-3 rounded-lg mb-10 mt-2"
        // style={styles.searchBar}
        placeholder="Search for a movie..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={results}
        keyExtractor={item => item.show.id.toString()}
        renderItem={renderMovie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // marginTop:20
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
  content: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
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
