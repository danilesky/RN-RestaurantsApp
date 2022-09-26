import { View } from "react-native";
import styled from "styled-components/native";

const direction = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const size = {
  S: 1,
  M: 2,
  L: 3,
  XL: 4,
};

const getStyled = (way, magnitude, theme) => {
  const property = direction[way];
  const value = size[magnitude];

  return `${property}:${theme.space[value]}`;
};

export const Spacer = styled(View)`
  ${({ way, magnitude, theme }) => getStyled(way, magnitude, theme)}
`;
