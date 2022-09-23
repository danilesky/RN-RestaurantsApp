import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const CardWrapper = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

const Cover = styled(Card.Cover)`
  backgroundcolor: "white";
`;
const Title = styled(Card.Title)`
  padding-left: 0;
`;
const Address = styled(Text)``;
const Star = styled(SvgXml)`
  padding-top: ${(props) => props.theme.space[2]};
  width: 25px;
  height: 25px;
`;
const Rating = styled(View)`
  flex: 1;
  flex-direction: row;
  margin-top: -15px;
  alignself: "stretch";
`;
const Open = styled(SvgXml)`
  margin-left: auto;
`;

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
        {isOpenNow && <Open xml={open} width={25} height={25} />}
      </Rating>
      <Address>{address}</Address>
    </CardWrapper>
  );
};

export default CardItem;
