import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductDescription = (props) => {
  const productDetail = props.source;
  const lineBreak = "\n";

  return (
    <View>
      <Text style={styles.text}>Description {lineBreak} </Text>
      <Text style={styles.text2}>{(productDetail && productDetail.description) || "No Description provided."}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",

  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    // color: ""
  }
});

export default ProductDescription;