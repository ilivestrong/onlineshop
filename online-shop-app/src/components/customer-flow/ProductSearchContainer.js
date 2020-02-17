import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SearchByName } from "./ProductSearch";

const handleProductSearchByName = (productName) => {
  
}

const ProductSearchContainer = (props) => {
  return (
    <View style={styles.container}>
      <SearchByName
        onProductNameChange={(productName) => handleProductSearchByName(productName)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-around"
  }
});

export default ProductSearchContainer;