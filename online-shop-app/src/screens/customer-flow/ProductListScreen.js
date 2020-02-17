import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Storage, Constants } from "../../common";
import { CustomerFlowComponents, Divider } from "../../components";

// TODO: To be removed later
import { Products } from "../../data/dummyProducts";

const ProductListScreen = (props) => {
  const [loggedInUser, setLoggedInUser] = React.useState("");
  const { Header } = CustomerFlowComponents;

  React.useEffect(() => {
    const getUser = async () => {
      const loggedInUser = await Storage.getItemFromStorage(Constants.Keys.username);
      setLoggedInUser(loggedInUser);
    }
    getUser();
  }, [loggedInUser]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, alignSelf: "flex-end" }}> Welcome, <Text style={{ fontWeight: "bold" }}>{loggedInUser}</Text> </Text>
      
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.bodyContainer}>
        {/*<Text>ProductListScreen Component will be rendered here!</Text>*/}
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