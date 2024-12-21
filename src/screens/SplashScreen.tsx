import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // 3-second delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://path-to-your-image.jpg' }} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  image: { width: 200, height: 200, resizeMode: 'contain' },
});

export default SplashScreen;
