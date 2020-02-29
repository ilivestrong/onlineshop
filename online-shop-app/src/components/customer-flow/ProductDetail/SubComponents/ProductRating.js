import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Rating } from "react-native-ratings";

const ProductRating = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buyer's Rating </Text>
      <Rating
        type='heart'
        imageSize={30}
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
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
  },
  data: {
    fontWeight: "bold"
  }
});

export default ProductRating;