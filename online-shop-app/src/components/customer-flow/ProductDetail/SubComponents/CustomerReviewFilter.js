import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
 

const CustomerReviewFilter = (props) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}> Customer Reviews Filter Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "brown"
  },
  text: {
    fontSize: 20,
  }

});

export default CustomerReviewFilter;