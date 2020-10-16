import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Planet from '../Planet';

interface Props {
  icon: string;
  name: string;
}

const PlanetCardSmall: React.FC<Props> = ({ name, icon }) => {
  return (
    <View style={styles.planetCard}>
      <Planet name={icon} type="half" dimension={120} />
      <View style={styles.button}>
        <Text style={styles.planetName}>{name}</Text>
        <Feather name="arrow-right" size={20} color="#FA8F70" />
      </View>
    </View>
  );
};

export default PlanetCardSmall;

const styles = StyleSheet.create({
  planetCard: {
    width: 140,
    height: 190,
    backgroundColor: '#151515',
    borderRadius: 8,
    marginRight: 15,
  },
  planetName: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
