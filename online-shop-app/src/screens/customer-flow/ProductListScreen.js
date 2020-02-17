import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Storage, Constants } from "../../common";

// TODO: To be removed later
import { Products } from "../../data/dummyProducts";

const ProductListScreen = (props) => {
  const [loggedInUser, setLoggedInUser] = React.useState("");

  React.useEffect(() => {
    const getUser = async () => {
      const loggedInUser = await Storage.getItemFromStorage(Constants.Keys.username);
      setLoggedInUser(loggedInUser);
    }
    getUser();
  }, [loggedInUser]);

  return (
    <View>
      <Text>{loggedInUser}, Welcome to Product List Screen!</Text>
    </View>
  );
}

export default ProductListScreen;