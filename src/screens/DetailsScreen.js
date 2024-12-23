// src/screens/DetailsScreen.js
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const DetailsScreen = ({route}) => {
  const {movie} = route.params;
  console.log(movie);
  return (
    <ScrollView style={styles.container} className="bg-black">
      <Image
        className="border border-red-500 px-2 rounded-[5px] "
        source={{
          uri: movie.image?.original || 'https://via.placeholder.com/300',
        }}
        style={styles.image}
      />
      <Text style={styles.title} className="text-white">
        {movie.name}
      </Text>
      <View class="bg-white p-4 rounded-lg shadow-md" style={styles.box1}>
        <View className=" m-2 p-2 rounded-lg">
          <Text className="text-[#E50914]  font-semibold">
            type :{' '}
            <Text className="text-white font-mono font-light">
              {movie.type}
            </Text>
          </Text>
          <Text className="text-[#E50914] font-semibold">
            language :{' '}
            <Text className="text-white font-mono font-light">
              {movie.language}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            status :{' '}
            <Text className="text-white font-mono font-light">
              {movie.status}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            Published :{' '}
            <Text className="text-white font-mono font-light">
              {movie.premiered}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            rating :{' '}
            <Text className="text-white font-mono font-light">
              {movie.rating.average} ⭐️
            </Text>
          </Text>
        </View>
        <View className="border m-2 p-2 rounded-lg">
          <Text className="text-[#E50914]  font-semibold">
            Genres: {'  '}{' '}
            <Text className="text-white font-mono font-light">
              {movie.genres}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            schedule :{' '}
            <Text className="text-white font-mono font-light">
              {movie.schedule.days}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            runtime :{' '}
            <Text className="text-white font-mono font-light">
              {movie.runtime}
            </Text>
          </Text>
          <Text className="text-[#E50914]  font-semibold">
            averageRuntime :{' '}
            <Text className="text-white font-mono font-light">
              {movie.averageRuntime}
            </Text>
          </Text>
        </View>
      </View>

      <Text style={styles.summary}>
        <Text className="text-red-500">Overview : </Text>
      </Text>
      <Text className="text-white italic pb-6 mb-5 px-1 mx-2">
        {movie.summary?.replace(/<[^>]*>?/gm, '') || 'No summary available.'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  image: {
    width: 390,
    height: 600,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box1: {
    flexDirection: 'row',
  },
  summary: {
    flexDirection: 'row',
    fontSize: 16,
    color: '#555',
  },
});

export default DetailsScreen;
