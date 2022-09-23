import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View } from "react-native";
import Search from "../components/Search";
import SearchContent from "../components/SearchContent";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../infrastructure/theme";

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

const restaurantsList = [
  {
    id: 1,
    name: "Some Restaurant",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
  },
];

const RestaurantsScreen = () => {
  const [searchQuery, setQuery] = useState("");
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
              <SearchContent data={restaurantsList} query={searchQuery} />
            </CardsList>
          </Restaurants>
          <StatusBar style="auto" />
        </RestaurantsWrapper>
      </ThemeProvider>
    </>
  );
};

export default RestaurantsScreen;
