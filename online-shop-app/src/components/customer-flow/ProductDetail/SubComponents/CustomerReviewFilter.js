import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { Dropdown } from "react-native-material-dropdown";

const filterTypes = [
  {
    value: "relevant",
  },
  {
    value: "all",
  },]

const CustomerReviewFilter = (props) => {
  const [filterType, setFilterType] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Customer Reviews {filterType}</Text>
      <Dropdown
        label="Reviews Type"
        data={filterTypes}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor : "brown"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",

  },
});

export default CustomerReviewFilter;