import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ProductTile } from "./Products"

const ProductsContainer = (props) => {
  const { source } = props;
  const navigation = useNavigation();

  const handleProductTileClick = (productID) => {
    navigation.navigate("ProductDetail");
  }

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.productTileContainer}>
        <ProductTile onClick={handleProductTileClick} product={item} />
      </View>

    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={source}
        numColumns={2}
        renderItem={renderProduct}
        keyExtractor={source.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productTileContainer: {
    flex: 1,
    margin: 5,
  }
});

export default ProductsContainer;