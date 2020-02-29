import React from "react";
import { View, StyleSheet, Text, Button, Image, ScrollView } from "react-native";

import {
  ProductDescription,
  ProductImage,
  ProductMetaInformation,
  ProductRating,
  CustomerReviewFilter,
  CustomerReviews,
} from "./SubComponents";

import { Constants } from "../../../common"

const dummyImageSource = require("../../../../assets/DummyProduct.jpg")

const ProductDetail = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.section1Container}>

        <View style={styles.imageMetaContainer}>
          <View style={styles.imageContainer}>
            <ProductImage imageURL={dummyImageSource} />
          </View>

          <View style={styles.metaContainer} >
            <ProductMetaInformation />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={Constants.labels.button.addToCart}
          onPress={() => alert("Product added to Cart")}
        />
        <Button
          title={Constants.labels.button.buyNow}
          onPress={() => alert("You will be redirected to Checkout page now")}
        />
      </View>


      <View style={styles.section2Container}>
        <ScrollView>
          <View style={styles.productDescriptionContainer}>
            <ProductDescription />
          </View>

          <View style={styles.productRatingContainer}>
            <ProductRating />
          </View>

          {
            <View style={styles.customerReviewsContainer}>
              <CustomerReviewFilter />
              <CustomerReviews />
            </View>
          }
        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  section1Container: {
    flex: 5,
    // backgroundColor: "blue",
    paddingTop: 10,

  },
  section2Container: {
    flex: 7,
    // backgroundColor: "green",
    paddingTop: 10,
  },
  imageMetaContainer: {
    margin: 5,
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'red'
  },
  imageContainer: {
    flex: 7,
    borderRightWidth: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 10
  },
  metaContainer: {
    margin: 10,
    flex: 3,
    flexDirection: "column"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 5,
    // backgroundColor: "white"
  },
  productDescriptionContainer: {
    flex: 1,
    // backgroundColor: 'gray'
  },
  productRatingContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    marginTop: 15,
  },
  customerReviewsContainer: {
    flex: 1,
    // backgroundColor: 'purple',
    marginTop: 30,
  }
});

export default ProductDetail;