import React from 'react';

import { PlanetProvider } from './planet';

const AppProvider: React.FC = ({ children }) => {
  return <PlanetProvider>{children}</PlanetProvider>;
};

export default AppProvider;
