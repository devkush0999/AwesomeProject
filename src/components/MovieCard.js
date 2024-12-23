import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  const { name, genres, rating, summary, image } = movie.show;

  // Helper function to strip HTML tags from the summary
  const stripHTML = (html) => html?.replace(/<[^>]*>?/gm, '') || '';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image?.medium }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.genres}>{genres.join(', ')}</Text>
        <Text style={styles.rating}>⭐ {rating?.average || 'N/A'}</Text>
        <Text style={styles.summary} numberOfLines={3}>
          {stripHTML(summary)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genres: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  summary: {
    fontSize: 14,
    color: '#555',
  },
});

export default MovieCard;
