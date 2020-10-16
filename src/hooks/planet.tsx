import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import planetsMock from '../res/planets';

interface Planet {
  name: string;
  description: string;
  icon: string;
  isFavorite: boolean;
}

interface PlanetContextData {
  planets: Planet[];
  updatePlanet(planet: Planet): void;
}

const PlanetContext = createContext<PlanetContextData>({} as PlanetContextData);

export const PlanetProvider: React.FC = ({ children }) => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  async function loadProducts(): Promise<void> {
    const response = await AsyncStorage.getItem('@solarsystem:planets');

    if (response && response.length > 0) {
      setPlanets(JSON.parse(response));
    } else {
      await AsyncStorage.setItem(
        '@solarsystem:planets',
        JSON.stringify(planetsMock),
      );
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const updatePlanet = useCallback(
    (planet: Planet) => {
      const index = planets.findIndex(
        p => p.name.toLocaleLowerCase() === planet.name.toLocaleLowerCase(),
      );

      if (index >= 0) {
        const updatePlanets = [...planets];
        updatePlanets[index].isFavorite = !updatePlanets[index].isFavorite;
        setPlanets(updatePlanets);
      }

      AsyncStorage.setItem('@solarsystem:planets', JSON.stringify(planets));
    },
    [planets],
  );

  return (
    <PlanetContext.Provider value={{ planets, updatePlanet }}>
      {children}
    </PlanetContext.Provider>
  );
};

export function usePlanet(): PlanetContextData {
  const context = useContext(PlanetContext);

  if (!context)
    throw new Error('usePlanet must be used within an PlanetProvider');

  return context;
}
