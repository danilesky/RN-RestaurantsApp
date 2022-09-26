import React from "react";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";

import {
  CardWrapper,
  Cover,
  Title,
  Rating,
  Star,
  Open,
} from "./CardItem.styles";

const CardItem = ({ picture, title, address, rating, isOpenNow }) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardWrapper>
      <Cover source={{ uri: picture }} />
      <Title title={title} />
      <Rating>
        {ratingArray.map((item, i) => (
          <Star key={i} xml={star} />
        ))}
        <Spacer way="left" magnitude="XL">
          <Text variant="error">CLOSED TEMPORARILY</Text>
        </Spacer>
        {isOpenNow && <Open xml={open} width={25} height={25} />}
      </Rating>
      <Text>{address}</Text>
    </CardWrapper>
  );
};

export default CardItem;
