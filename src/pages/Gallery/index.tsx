import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constellation from '../../components/Constellation';

const Gallery = () => {
  return (
    <View style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <Text style={styles.subText}>
          Essa página está em processo de contrução.
        </Text>
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
