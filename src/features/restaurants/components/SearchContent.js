import React from "react";
import CardItem from "./CardItem";

const SearchContent = ({ data, query }) => {
  return data.map((filteredData) => {
    if (filteredData.title.toLowerCase().match(query.toLowerCase())) {
      return (
        <CardItem
          key={filteredData.id}
          title={filteredData.title}
          picture={filteredData.picture}
        />
      );
    }
  });
};

export default SearchContent;
