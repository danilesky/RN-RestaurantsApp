import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setQuery(query);
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    color: "black",
    width: "auto",
    alignSelf: "stretch",
  },
});
export default Search;
