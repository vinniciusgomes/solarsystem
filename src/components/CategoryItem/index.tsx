import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";

import Planets from "../../assets/icons/planets.svg";
import Asteroids from "../../assets/icons/asteroids.svg";
import Stars from "../../assets/icons/stars.svg";
import Galaxies from "../../assets/icons/galaxies.svg";

interface Props {
  icon: string;
  name: string;
  colors: Array<string>;
}

const CategoryItem: React.FC<Props> = ({ name, icon, colors }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "planets":
        return <Planets width={30} height={30} />;
      case "asteroids":
        return <Asteroids width={30} height={30} />;
      case "stars":
        return <Stars width={30} height={30} />;
      case "galaxies":
        return <Galaxies width={30} height={30} />;

      default:
        return <Planets width={30} height={30} />;
    }
  };

  return (
    <LinearGradient style={styles.categoryContainer} colors={colors}>
      {getIcon(icon)}
      <Text style={styles.categoryText}>{name}</Text>
    </LinearGradient>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  categoryText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
