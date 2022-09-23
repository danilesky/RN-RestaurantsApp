import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const CardItem = ({ picture, title }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: picture }} />
      <Card.Title title={title} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  cover: {
    padding: 5,
    backgroundColor: "white",
  },
});

export default CardItem;
