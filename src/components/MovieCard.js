import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.image?.medium || 'https://via.placeholder.com/150' }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text numberOfLines={2} style={styles.summary}>{movie.summary?.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#222', borderRadius: 5, overflow: 'hidden' },
  thumbnail: { width: 100, height: 150 },
  details: { flex: 1, padding: 10 },
  title: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  summary: { color: '#bbb', fontSize: 12, marginTop: 5 },
});

export default MovieCard;

