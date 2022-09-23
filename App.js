import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View } from "react-native";
import Search from "./src/components/Search";
import SearchContent from "./src/components/SearchContent";
import styled from "styled-components";

const AppBodyWrapper = styled(View)`
  flex: 1;
`;
const AppBody = styled(View)`
  flex: 1;
  justifycontent: "center";
  alignself: "stretch";
  alignitems: "center";
`;

const SearchBarWrapper = styled(View)`
  alignself: "stretch";
  padding: 10px;
`;

const CardsList = styled(ScrollView)`
  alignself: "stretch";
  padding: 10px;
`;

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
        <SearchBarWrapper>
          <Search setQuery={setQuery} />
        </SearchBarWrapper>
      </SafeAreaView>

      <AppBodyWrapper>
        <AppBody>
          <CardsList>
            <SearchContent data={animeList} query={searchQuery} />
          </CardsList>
        </AppBody>
        <StatusBar style="auto" />
      </AppBodyWrapper>
    </>
  );
}
