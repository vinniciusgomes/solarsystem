import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from './pages/Welcome';

import Homepage from './pages/Homepage';
import Search from './pages/Search';
import PlanetDetail from './pages/PlanetDetail';
import Bookmark from './pages/Bookmark';
import Gallery from './pages/Gallery';

const AppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

const MarsPage = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="PlanetDetail" component={PlanetDetail} />
    </AppStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFF',
        style: {
          backgroundColor: '#151515',
          /* borderTopEndRadius: 16,
          borderTopLeftRadius: 16, */
          height: 55,
        },
        labelStyle: {
          margin: 5,
        },
      }}
    >
      <AppTab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} style={{ top: 5 }} />
          ),
        }}
      />
      <AppTab.Screen
        name="SearchPage"
        component={MarsPage}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="search"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: 'Salvos',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="bookmark"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarLabel: 'Galeria',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="image"
              color={color}
              size={size}
              style={{ top: 5 }}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Homepage" component={BottomTabNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
