import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens";
import { CustomerStackNavigator } from "./customer-flow/";

const AppNavigator = (props) => {
  
  const RootNavigator = createStackNavigator();
  return (
    <RootNavigator.Navigator initialRouteName="Home">
      <RootNavigator.Screen name="Home" component={LoginScreen} options = {{title: "Authentication"}} />
      <RootNavigator.Screen name="CustomerFlowStack" component={CustomerStackNavigator} options = {{title : "Online Shop"}} />
    </RootNavigator.Navigator>
  );
}

export default AppNavigator;