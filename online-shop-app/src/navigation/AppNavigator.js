import React from "react";


import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens";

const AppNavigator = (props) => {
  const RootNavigator = createStackNavigator();

  return (
      <RootNavigator.Navigator initialRouteName = "Home">
        <RootNavigator.Screen name="Home" component={LoginScreen} />
      </RootNavigator.Navigator>

  );
}

export default AppNavigator;