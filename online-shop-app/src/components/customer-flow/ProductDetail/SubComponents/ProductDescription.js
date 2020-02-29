import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ProductDescription = (props) => {
  const lineBreak = "\n";
  return (
    <View>
      <Text style={styles.text}>Description {lineBreak} </Text>
      <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</Text>

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
    fontSize: 14,
    fontWeight: "normal",
    // color: "blue"
  }
});

export default ProductDescription;