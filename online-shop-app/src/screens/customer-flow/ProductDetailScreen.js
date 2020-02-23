import React from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";

import { CustomerFlowComponents, UserInfo } from "../../components";

const ProductDetailScreen = (props) => {
  const { ProductDetailContainer } = CustomerFlowComponents;

  console.log(props);

  return (
    <View style={styles.container}>
      <UserInfo />

      <View style={styles.bodyContainer}>
        <ProductDetailContainer selectedProductID={props.route.params?.productID} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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

export default ProductDetailScreen;