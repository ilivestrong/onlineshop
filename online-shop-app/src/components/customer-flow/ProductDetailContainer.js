import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
//import { useNavigation } from "@react-navigation/native";

import { ProductDetail } from "./ProductDetail";

const ProductDetailContainer = (props) => {
  //console.log(props.selectedProductID);

  return (
    <View style={styles.container}>
      <ProductDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProductDetailContainer;