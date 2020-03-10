import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ProductDetail } from "./ProductDetail";
import { getProductDetail } from "../../Redux/Sagas/CustomerFlow/ProductDetail";

const ProductDetailContainer = (props) => {
  const { selectedProductID, getProductDetail, productDetail } = props;
  React.useEffect(() => {
    getProductDetail({
      selectedProductID,
    });

  }, []);

  return (
    <View style={styles.container}>
      <ProductDetail source={productDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    productDetail: state.productDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProductDetail,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);