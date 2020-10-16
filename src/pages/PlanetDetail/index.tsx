import React, { useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Rect } from 'react-native-svg';

import { usePlanet } from '../../hooks/planet';

import Planet from '../../components/Planet';

import CONTENT from '../../res/sections';

const screen = Dimensions.get('screen');

interface IParams {
  planet: {
    name: string;
    description: string;
    icon: string;
    isFavorite: boolean;
  };
}

const MarsPage = () => {
  const navigation = useNavigation();
  const planetParms = useRoute();
  const { planet } = planetParms.params as IParams;
  const { updatePlanet } = usePlanet();
  const { name, description, icon, isFavorite } = planet;
  const [favorite, setFavorite] = useState(isFavorite);

  const [dimensions] = useState({ screen });
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Feather name="chevron-down" size={24} color="#000" />
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    updatePlanet(planet);
  };

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={{ top: -30, zIndex: 0 }}>
        <Rect
          width={dimensions.screen.width}
          height={260}
          rx="32"
          fill="#000"
          strokeWidth="3"
        />
      </Svg>

      <View style={styles.body}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Feather name="settings" size={24} color="#FFFFFF" />
        </View>

        <View style={styles.planet}>
          <Planet name={icon} type="full" dimension={200} />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.icons}>
            {favorite ? (
              <TouchableOpacity onPress={handleFavorite}>
                <MaterialIcons name="bookmark" size={25} color="#FA8F70" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleFavorite}>
                <Feather name="bookmark" color="#151515" size={25} />
              </TouchableOpacity>
            )}
            <Feather name="share-2" color="#151515" size={24} />
          </View>
        </View>

        <Text style={styles.description}>{description}</Text>

        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MarsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
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
  planet: {
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#151515',
  },
  icons: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  description: {
    marginTop: 15,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#151515',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 0.5,
  },
  headerText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#151515',
    marginLeft: 10,
  },
  content: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  active: {
    backgroundColor: '#FFFFFF',
  },
  inactive: {
    backgroundColor: '#FFFFFF',
  },
});
