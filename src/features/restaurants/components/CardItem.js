import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const CardWrapper = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const Cover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
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
