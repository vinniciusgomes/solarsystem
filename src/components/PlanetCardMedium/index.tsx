import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Planet from '../Planet';

interface Props {
  icon: string;
  name: string;
  description: string;
  isFavorite: boolean;
  onPress: () => void;
}

const PlanetCardMedium: React.FC<Props> = ({
  name,
  icon,
  description,
  isFavorite,
  onPress,
}) => {
  const navigation = useNavigation();

  const handlePress = (planet: any) => {
    navigation.navigate('PlanetDetail', { planet });
  };

  return (
    <View style={styles.planetCard}>
      <View>
        <Planet name={icon} type="half" dimension={130} />
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.bookmarkContainer}>
          <Text style={styles.name}>{name}</Text>
          {isFavorite ? (
            <TouchableOpacity onPress={onPress}>
              <MaterialIcons
                name="bookmark"
                size={25}
                color="#FA8F70"
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onPress}>
              <Feather
                name="bookmark"
                color="#FFFFFF"
                size={24}
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.desciption}>
          Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol
          desde a reclassificação...
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress({ name, icon, isFavorite, description })}
        >
          <Text style={styles.continuosText}>Continue lendo</Text>
          <Feather name="arrow-right" size={20} color="#FA8F70" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanetCardMedium;

const styles = StyleSheet.create({
  planetCard: {
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#151515',
    borderRadius: 8,
    marginBottom: 15,
  },
  rightColumn: {
    flexShrink: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  bookmarkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  name: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  desciption: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.65,
  },
  button: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  continuosText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 10,
  },
});
