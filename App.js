import React from "react";
import { StatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/Restaurants.screen";
import { RestaurantsProvider } from "./src/features/restaurants/services/restaurants/restaurants.context";

export default function App() {
  return (
    <RestaurantsProvider>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </RestaurantsProvider>
  );
}
