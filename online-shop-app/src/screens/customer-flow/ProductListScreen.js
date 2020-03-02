import React from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";

import { CustomerFlowComponents, UserInfo } from "../../components";

// TODO: To be removed later
import { Products } from "../../data/dummyProducts";
import { ProductDetailContainer } from "../../components/customer-flow";

const ProductListScreen = (props) => {
  const { Header, ProductsContainer } = CustomerFlowComponents;
  return (
    <View style={styles.container}>
      <UserInfo />

      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.bodyContainer}>
        <ProductsContainer />
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

export default ProductListScreen;