import styled from "styled-components";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const CardWrapper = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
`;

export const Cover = styled(Card.Cover)`
  backgroundcolor: "white";
`;
export const Title = styled(Card.Title)`
  padding-left: 0;
`;
export const Star = styled(SvgXml)`
  padding-top: ${(props) => props.theme.space[2]};
  width: 25px;
  height: 25px;
`;
export const Rating = styled(View)`
  flex: 1;
  flex-direction: row;
  margin-top: -15px;
  alignself: "stretch";
`;
export const Open = styled(SvgXml)`
  margin-left: auto;
`;
