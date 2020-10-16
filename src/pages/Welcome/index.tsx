import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import SolarSystem from '../../components/SolarSystem';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <SolarSystem />
      <View style={styles.content}>
        <Text style={styles.text}>Aperte o cinto</Text>
        <Text style={styles.subText}>
          Comece sua jornada pelo sistema solar.
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.textReady}>Pronto para a decolagem?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Homepage')}
            activeOpacity={0.6}
          >
            <LinearGradient
              style={styles.button}
              colors={['#EF5F53', '#FA8F70']}
              start={[0, 1]}
              end={[1, 0]}
            >
              <Text style={styles.buttonText}>Começar agora</Text>
              <Feather name="arrow-right" color="#FFFFFF" size={24} />
            </LinearGradient>
          </TouchableOpacity>
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
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.65,
  },
  subText: {
    width: '90%',
    fontFamily: 'Roboto_400Regular',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textReady: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  buttonContainer: {
    top: 150,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 206,
    height: 51,
    borderRadius: 8,

    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',

    marginRight: 10,
  },
});
