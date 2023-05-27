import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AuthContextProvider } from './src/context/AuthContext';
import { Routes } from './src/navigation/RouterNavigator';
import { useState } from 'react';
import ListItem from './src/components/ListItem';
import { LoginView } from './src/views/LoginView';
import { LaunchContextProvider } from './src/context/LaunchContext';

export default function App() {

  return (
    <View style={styles.container}>
      <AuthContextProvider >
        <LaunchContextProvider >
            <Routes />
        </LaunchContextProvider>
      </AuthContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
