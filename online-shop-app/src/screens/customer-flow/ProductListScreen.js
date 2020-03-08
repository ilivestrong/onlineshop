import React from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CustomerFlowComponents, UserInfo } from "../../components";
import { ProductDetailContainer } from "../../components/customer-flow";

import { ProductListActionTypes } from "../../Redux/Sagas/CustomerFlow/ProductList";
import { ProductSearchFilterTypes } from "../../common/Constants";

const ProductListScreen = (props) => {
  const { Header, ProductsContainer } = CustomerFlowComponents;
  const { productsList = [], fetchProductList } = props;

  React.useEffect(() => { 
    fetchProductList({
      filter: {
        type: ProductSearchFilterTypes.ProductName,
        value: "White",
      },
    });
  }, [])

  return (
    <View style={styles.container}>
      <UserInfo />

      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.bodyContainer}>
        <ProductsContainer source={productsList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: '',
  },
  headerContainer: {
    marginTop: 20,
    flex: 1
  },
  bodyContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 50,
    flex: 19,
    borderWidth: 1,
    borderColor: "gray"
  }
})

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProductList: ProductListActionTypes.fetchProductList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);