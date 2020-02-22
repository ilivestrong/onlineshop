import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductListScreen, ProductDetailScreen } from "../../screens/customer-flow";
const CustomerNavigator = (props) => {
  const CustomerStackNavigator = createStackNavigator();

  return (
    <CustomerStackNavigator.Navigator screenOptions={{ headerShown: true }}>
      <CustomerStackNavigator.Screen name="ProductList" component={ProductListScreen}
        options = {{headerTitle: "Product List"}} 
      />
      <CustomerStackNavigator.Screen name="ProductDetail" component={ProductDetailScreen}
        options={{ headerTitle: "Product Details" }}
      />
    </CustomerStackNavigator.Navigator>
  );
}

export default CustomerNavigator;