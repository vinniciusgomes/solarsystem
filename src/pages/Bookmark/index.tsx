import React, { useMemo } from 'react';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constellation from '../../components/Constellation';
import PlanetCardMedium from '../../components/PlanetCardMedium';

import { usePlanet } from '../../hooks/planet';

const Bookmark = () => {
  const navigation = useNavigation();
  const { planets, updatePlanet } = usePlanet();

  const bookmarks = useMemo(() => {
    const filtered = planets.filter(planet => planet.isFavorite === true);
    return filtered;
  }, [planets]);

  return (
    <View style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Feather name="settings" size={24} color="#FFFFFF" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subText}>Meus favoritos</Text>

          {bookmarks.map(planet => (
            <PlanetCardMedium
              key={planet.name}
              name={planet.name}
              description={planet.description}
              icon={planet.icon}
              isFavorite={planet.isFavorite}
              onPress={() => updatePlanet(planet)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 20 + Constants.statusBarHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 30,
  },
});
