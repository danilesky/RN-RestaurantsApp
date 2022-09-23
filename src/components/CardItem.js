import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const CardWrapper = styled(Card)`
  marginbottom: 20px;
`;

const Cover = styled(Card.Cover)`
  padding: 5px;
  backgroundcolor: "white";
`;

const CardItem = ({ picture, title }) => {
  return (
    <CardWrapper>
      <Cover source={{ uri: picture }} />
      <Card.Title title={title} />
    </CardWrapper>
  );
};

export default CardItem;
