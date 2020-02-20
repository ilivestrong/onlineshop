import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductListScreen, ProductDetailScreen } from "../../screens/customer-flow";
const CustomerNavigator = (props) => {
  const CustomerStackNavigator = createStackNavigator();

  return (
    <CustomerStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <CustomerStackNavigator.Screen name="ProductList" component={ProductListScreen} />
      <CustomerStackNavigator.Screen name="ProductDetail" component={ProductDetailScreen} />
    </CustomerStackNavigator.Navigator>
  );
}

export default CustomerNavigator;