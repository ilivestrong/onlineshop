import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";


const ProductDetail = (props) => {
  return (
    <View style={styles.container}>
      <Text>Product Detail Component</Text>

      <View style={styles.section1Container}>

        <View style={styles.imageMetaContainer}>

          <View style={styles.imageContainer}>
          </View>

          <View style={styles.metaContainer} ></View>
        </View>
      </View>

      <View style={styles.section2Container}>

        <View style={styles.buttonContainer}>
        </View>

        <View style={styles.productRatingContainer}>

        </View>

        <View style={styles.customerReviewsContainer}>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1Container: {
    flex: 3
  },
  section2Container: {
    flex: 7
  },
  imageMetaContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'red'
  },
  imageContainer: {
    flex: 7,
  },
  metaContainer: {
    flex: 1,
    flexDirection: "column"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  productDescriptionContainer: {
    flex: 1
  },
  productRatingContainer: {
    flex: 1,
  }
});

export default ProductDetail;