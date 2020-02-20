import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";


const ProductDetail = (props) => {
  return (
    <View style={styles.container}>
      <Text>Product Detail Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ProductDetail;