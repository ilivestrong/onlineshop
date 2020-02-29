import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CustomerReviews = (props) => {
  return (
    <View>
    <Text style={styles.text}>Customer Reviews Component</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    <Text style = {styles.text2}>Dummy Customer Reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  text2: {
    fontSize: 14,
    // color: "yellow"
  }
});

export default CustomerReviews;