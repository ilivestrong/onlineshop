import React from "react";
import { Image, TouchableOpacity, FlatList, View, Text, StyleSheet } from "react-native";

const dummyProductImage = require("../../../../assets/DummyProduct.jpg");
import { Constants } from "../../../common/Constants"

const ProductTile = (props) => {
  const { id, name, price, imageURL } = props.product;
  const handleProductTileClicked = (tileInfo) => {

  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleProductTileClicked(id)}
    >

      <Image
        style={styles.image}
        resizeMode="stretch"
        source={dummyProductImage} />

      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Text style={styles.text}>{Constants.common.defaultCurrencySymbol} {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    width: 100,
    height: 150
  },
  text: {
    marginLeft: 10,
  }
});

export default ProductTile;