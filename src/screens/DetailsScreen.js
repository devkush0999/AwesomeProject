// src/screens/DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.container} >
      <Image
        source={{ uri: movie.image?.original || 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>
        {movie.summary?.replace(/<[^>]*>?/gm, '') || 'No summary available.'}
      </Text>
      <Text className='text-red-500'>hii</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop :20,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#555',
  },
});

export default DetailsScreen;
