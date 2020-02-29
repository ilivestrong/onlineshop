import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Storage, Constants } from "../../common";

const UserInfo = (props) => {
  const [loggedInUser, setLoggedInUser] = React.useState("");
  React.useEffect(() => {
    const getUser = async () => {
      const loggedInUser = await Storage.getItemFromStorage(Constants.Keys.username);
      setLoggedInUser(loggedInUser);
    }
    getUser();
  }, [loggedInUser]);

  const navigation = useNavigation();
  const handleLogout = () => {
    Storage.setItemInStorage(Constants.Keys.username, "");
    navigation.navigate("Home");
  }

  return (
    <View style={styles.userInfoContainer}>
      <Text style={{ fontSize: 20, alignSelf: "flex-end" }}>
        Welcome,
  <Text style={{ fontWeight: "bold" }}>{loggedInUser}</Text>
      </Text>
      <Button
        title="(Logout)"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
});



export default UserInfo;