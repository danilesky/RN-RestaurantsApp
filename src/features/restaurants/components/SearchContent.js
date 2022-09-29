import React from "react";
import CardItem from "./CardItem";

const SearchContent = ({ data, query }) => {
  return data.map((filteredData) => {
    if (filteredData.name.toLowerCase().match(query.toLowerCase())) {
      return (
        <CardItem
          key={filteredData.name}
          title={filteredData.name}
          picture={filteredData.photos[0]}
          address={filteredData.vicinity}
          rating={filteredData.rating}
          isOpenNow={filteredData.isOpenNow}
        />
      );
    }
  });
};

export default SearchContent;
