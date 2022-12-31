import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function SwiperComponent() {
  return (
    <View
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >

      <View style={styles.slide}>
        <Image
          //source={require('./src/assets/1.png')}
          backgroundColor={'red'}
          style={{ width: '100%', height: 400 }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          backgroundColor={'red'}

          style={{ width: '100%', height: 400 }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          backgroundColor={'red'}
          style={{ width: '100%', height: 400 }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})