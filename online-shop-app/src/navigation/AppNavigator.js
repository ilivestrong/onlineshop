import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens";
import { CustomerStackNavigator } from "./customer-flow/";

const AppNavigator = (props) => {
  
  const RootNavigator = createStackNavigator();
  return (
    <RootNavigator.Navigator initialRouteName="Home" headerMode = "none">
      <RootNavigator.Screen name="Home" component={LoginScreen} options = {{title: "Authentication"}} />
      <RootNavigator.Screen name="CustomerFlowStack" component={CustomerStackNavigator} />
    </RootNavigator.Navigator>
  );
}

export default AppNavigator;