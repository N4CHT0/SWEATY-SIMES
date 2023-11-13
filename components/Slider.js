import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const Slider = ({ images }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{gap: 20}}>
      {images.map((image, index) => (
        <Image key={index} source={image} style={styles.image} />
      ))}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  image: {
    width: 370,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});

export default Slider;
