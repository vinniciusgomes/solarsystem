import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

import CategoryItem from '../../components/CategoryItem';
import PlanetCardSmall from '../../components/PlanetCardSmall';
import Constellation from '../../components/Constellation';

import categories from '../../res/categories';
import { usePlanet } from '../../hooks/planet';

const Home = () => {
  const navigation = useNavigation();
  const { planets } = usePlanet();
  const [value, onChangeText] = useState('');

  return (
    <View style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.username}>Olá, Wallyson</Text>
          <Feather name="settings" size={24} color="#FFFFFF" />
        </View>

        <Text style={styles.subText}>O que você vai aprender hoje?</Text>

        <View style={styles.inputContainer}>
          <Feather
            name="search"
            size={17}
            color="#FFFFFF"
            style={{ paddingRight: 10 }}
          />
          <TextInput
            style={{ color: '#fff' }}
            placeholder="Procure planetas, asteroides, estrelas..."
            onChangeText={text => onChangeText(text)}
            onSubmitEditing={() =>
              navigation.navigate('SearchPage', {
                screen: 'Search',
                params: { searchPlanet: value },
              })
            }
          />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Categorias</Text>

          <View style={styles.sections}>
            {categories.map(({ name, icon, colors }) => (
              <CategoryItem
                key={name}
                name={name}
                icon={icon}
                colors={colors}
              />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Planetas</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {planets.map(({ name, icon }) => (
              <PlanetCardSmall key={name} name={name} icon={icon} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 40,
    backgroundColor: '#151515',
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
  username: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 20,
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
