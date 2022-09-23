import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchBar = styled(Searchbar)`
  width: auto;
  alignself: "stretch";
`;

const Search = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setQuery(query);
    setSearchQuery(query);
  };

  return (
    <SearchBar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
