import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const SearchByName = (props) => {
  const { onProductNameChange, onProductSearchByName } = props;

  const [productName, setProductName] = React.useState("");
  const handleProductNameChange = (changedName) => {
    setProductName(changedName);

    if (onProductNameChange) {
      props.onProductNameChange(productName);
    }
  }

  const handleProductSearchByName = () => {
    if (onProductSearchByName) {
      props.onProductSearchByName(productName);
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search by name"
        placeholderTextColor="black"
        style={styles.input}
        value={productName}
        onChangeText={handleProductNameChange}
      />
      <Button
        title="Search"
        onPress={handleProductSearchByName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 2,
    width: 150,
  }
});

export default SearchByName;