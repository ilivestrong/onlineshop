import React from "react";
import { View, StyleSheet } from "react-native";

export default (props) => {
  const defaultStyle = {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  };

  return (
    <View
      style={{ ...defaultStyle, ...props.style }}
    />
  )
}