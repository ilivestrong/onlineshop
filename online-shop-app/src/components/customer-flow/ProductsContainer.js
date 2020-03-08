import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ProductTile } from "./Products"

const ProductsContainer = (props) => {
  const {source: productsList } = props;
  //console.log(productsList);
  const navigation = useNavigation();

  const handleProductTileClick = (productID) => {
    navigation.navigate("ProductDetail", {
      productID,
    });
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
        data={productsList}
        numColumns={2}
        renderItem={renderProduct}
      // keyExtractor={(item, index) => index}
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