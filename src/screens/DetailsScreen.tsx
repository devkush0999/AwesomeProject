import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.original || 'https://via.placeholder.com/300' }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  image: { width: '100%', height: 300, borderRadius: 5 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  summary: { color: '#bbb', fontSize: 14 },
});

export default DetailsScreen;
