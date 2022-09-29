import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View } from "react-native";
import Search from "../components/Search";
import SearchContent from "../components/SearchContent";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";

const RestaurantsWrapper = styled(View)`
  flex: 1;
`;
const Restaurants = styled(View)`
  flex: 1;
  justifycontent: "center";
  alignself: "stretch";
  alignitems: "center";
`;

const SearchBarWrapper = styled(View)`
  alignself: "stretch";
  padding: ${(props) => props.theme.space[2]};
`;

const CardsList = styled(ScrollView)`
  alignself: "stretch";
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantsScreen = () => {
  const [searchQuery, setQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(restaurants);
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <SearchBarWrapper>
            <Search setQuery={setQuery} />
          </SearchBarWrapper>
        </SafeAreaView>

        <RestaurantsWrapper>
          <Restaurants>
            <CardsList>
              <SearchContent data={restaurants} query={searchQuery} />
            </CardsList>
          </Restaurants>
          <StatusBar style="auto" />
        </RestaurantsWrapper>
      </ThemeProvider>
    </>
  );
};

export default RestaurantsScreen;
