import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductRating = (props) => {
  return (
    <View>
      <Text style={styles.header}>Product Rating: <Text style={styles.data}>5 stars</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    color: "brown"
  },
  data: {
    fontWeight: "bold"
  }
});

export default ProductRating;