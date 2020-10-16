import React from 'react';
import { StyleSheet } from 'react-native';

import BGConstellation from '../../assets/backgrounds/background-constellation.svg';

const Constellation = () => {
  return <BGConstellation style={styles.image} />;
};

export default Constellation;

const styles = StyleSheet.create({
  image: {
    right: 460,
    backgroundColor: '#000',
    bottom: 100,
    zIndex: 0,
    width: '200%',
  },
});
