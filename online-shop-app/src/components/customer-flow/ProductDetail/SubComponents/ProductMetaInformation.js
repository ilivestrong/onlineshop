import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductMetaInformation = (props) => {
  const lineBreak = "\n";
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text>Dimension : {lineBreak}10 x 10 {lineBreak}</Text>
        <Text>Weight: {lineBreak}150 {lineBreak}</Text>
        <Text>Color: {lineBreak}Some Color {lineBreak}</Text>
        <Text>Available: {lineBreak}(Sold Out) {lineBreak}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold"
  },
  text2: {
    fontSize: 14,
    color: "blue"
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1
  }
});

export default ProductMetaInformation;