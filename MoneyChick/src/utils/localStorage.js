import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalStorageItem = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (e) {
    console.log('Error reading value from local storage.', e);
  }
};

export const storeLocalStorageItem = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    console.log('Error storing data in local storage. ', e);
  }
};

export const removeLocalStorageItem = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (e) {
    console.log('Error removing data from local storage. ', e);
  }
};
