import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const ProductRating = (props) => {
  const product = props.source;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buyer's Rating </Text>
      <AirbnbRating defaultRating={product.rating} />
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