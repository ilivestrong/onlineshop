import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Rating } from "react-native-ratings";

const ProductRating = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buyer's Rating </Text>
      <Rating
        type='heart'
        imageSize={20}
        readonly
        startingValue={4}
        style={{ paddingVertical: 10 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
  header: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  data: {
    fontWeight: "bold"
  }
});

export default ProductRating;