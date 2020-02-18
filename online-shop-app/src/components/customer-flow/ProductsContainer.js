import React from "react";
import { View, FlatList } from "react-native";

import { ProductTile } from "./Products"

const ProductsContainer = (props) => {
  const { source } = props;

  const renderProduct = ({ item }) => {
    return (
      <ProductTile product={item} />
    );
  }

  return (
    <View>
      <FlatList
        data={source}
        numColumns={2}
        renderItem={renderProduct}
        keyExtractor={source.id}
      />
    </View>
  );
}

export default ProductsContainer;