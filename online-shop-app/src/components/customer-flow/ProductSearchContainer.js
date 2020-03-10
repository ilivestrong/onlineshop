import React from "react";
import { View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ProductListActionTypes } from "../../Redux/Sagas/CustomerFlow/ProductList";

import { SearchByName } from "./ProductSearch";
import { ProductSearchFilterTypes } from "../../common";


const ProductSearchContainer = (props) => {
  const handleProductSearchByName = (productName) => {
    const { filterProducts } = props;
    filterProducts({
      filter: {
        type: ProductSearchFilterTypes.ProductName,
        value: productName,
      }
    })
  }

  return (
    <View style={styles.container}>
      <SearchByName
        onProductSearchByName={(productName) => handleProductSearchByName(productName)} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    // justifyContent: "space-around"
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    filterProducts: ProductListActionTypes.fetchProductList,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductSearchContainer);