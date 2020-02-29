import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { default as ProductSearchContainer } from "./ProductSearchContainer";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <ProductSearchContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
  }
});

export { Header };