import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";

const ProductImage = (props) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={props.imageURL}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ProductImage;