import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import { OnlineShopStore } from "./src/Redux";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={OnlineShopStore}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});