import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

// TODO: to be removed later
import { DummyCredentials } from "../data/dummyCredentails";

import { Storage, Constants } from "../common";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleFormSubmit = async () => {
    const matchedList = DummyCredentials.filter(user => user.username === username
      && user.password === password);

    if (matchedList.length > 0) {
      await Storage.setItemInStorage(Constants.Keys.username, matchedList[0].username);
      props.navigation.replace("CustomerFlowStack");
    } else {
      alert("Incorrect credentials, please verify and try again.");
    }
  }

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.labelContainer}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.inputStyle}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
        autoCapitalize="none"
        style={styles.inputStyle} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry = {true}
         />
      </View>
      <View style={styles.submitContainer}>
        <Button
          title="Sign In"
          color="gray"
          onPress={handleFormSubmit}
          style={styles.submitStyle}
        />
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    marginBottom: 100,
    fontSize: 35,
    color: 'gray',
    fontWeight: "bold"
  },
  inputContainer: {
    margin: 10,
    width: '60%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  inputStyle: {
    fontSize: 25
  },
  submitContainer: {
    marginTop: 50,
  },
})

export default Login;