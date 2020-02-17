import { AsyncStorage } from "react-native";

const getItemFromStorage = async (itemKey) => {
  try {
    return await AsyncStorage.getItem(itemKey);
  } catch (err) {
    return err;
  }
}

const setItemInStorage = async (itemKey, itemValue) => {
  try {
    await AsyncStorage.setItem(itemKey, itemValue);
  } catch (err) {
    return err;
  }
}

export const Storage = {
  getItemFromStorage,
  setItemInStorage,
}