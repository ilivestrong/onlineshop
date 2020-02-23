import React from "react";
import { Image, TouchableOpacity, FlatList, View, Text, StyleSheet } from "react-native";

const dummyProductImage = require("../../../../assets/DummyProduct.jpg");
import { Constants } from "../../../common/Constants"

const ProductTile = (props) => {
  
  const { product: { id, name, price, imageURL }, onClick } = props;

  const handleProductTileClicked = (tileInfo) => {
    onClick(tileInfo);
  }

  const colors = [
    'red',
    'yellow',
    'blue',
    'green',
    'gray',
    'purple',
    'pink',
    'white'
  ]

  const color = colors[id];

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        // width: 100,
        height: 300,
        backgroundColor: color,
        padding: 20,
        // justifyContent: 'center',
      }}
      onPress={handleProductTileClicked.bind(this, id)}
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
  // container: {
  //   flex: 1,
  //   width: 100,
  //   height: 400,
  // },
  image: {
    flex: 1,
    width: "100%",
    // height: "60%"
  },
  text: {
    backgroundColor: 'white',
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default ProductTile;