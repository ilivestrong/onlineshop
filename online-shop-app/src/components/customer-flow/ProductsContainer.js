import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";

import { ProductTile } from "./Products"

const ProductsContainer = (props) => {
  const { productsList } = props;
  console.log(props.dispatch);
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
        data={productsList.products}
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

const mapStateToProps = (state) => ({
  productsList: state.products,
});

export default connect(mapStateToProps)(ProductsContainer);