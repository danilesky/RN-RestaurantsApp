import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/Restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
