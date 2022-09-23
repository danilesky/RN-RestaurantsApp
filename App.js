import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Search from "./src/components/Search";
import CardItem from "./src/components/CardItem";
import SearchContent from "./src/components/SearchContent";

const animeList = [
  {
    id: 0,
    title: "Restaurant",
    picture:
      "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
  },
];

export default function App() {
  const [searchQuery, setQuery] = useState("");
  return (
    <>
      <SafeAreaView>
        <View style={styles.search}>
          <Search setQuery={setQuery} />
        </View>
      </SafeAreaView>
      <View style={styles.bodyWrapper}>
        <View style={styles.body}>
          <ScrollView style={styles.cardWrapper}>
            <SearchContent data={animeList} query={searchQuery} />
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bodyWrapper: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  search: {
    alignSelf: "stretch",
    padding: 10,
  },
  cardWrapper: {
    alignSelf: "stretch",
    padding: 10,
  },
});
