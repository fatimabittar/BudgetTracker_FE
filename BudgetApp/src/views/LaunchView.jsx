import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, AppState, ActivityIndicator, View } from 'react-native';
import { FormHeader } from "../components/FormHeader";


export const LaunchView = ({ navigation }) => {
  
  // const [appState, setAppState] = useState(AppState.currentState);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     const handleAppStateChange = (newAppState) => {
  //       setAppState(newAppState);
  //     };

  //     // Subscribe to app state changes
  //     AppState.addEventListener('change', handleAppStateChange);

  //     return () => {
  //       // Clean up the subscription when the component unmounts
  //       AppState.removeEventListener('change', handleAppStateChange);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (appState === 'active') {
  //       // App is opened or becomes active
  //       const timeout = setTimeout(() => {
  //         setIsLoading(false); // Hide the loading icon after 5 seconds
  //         navigation.navigate('Login')
  //       }, 3000);

  //       return () => {
  //         clearTimeout(timeout); // Clear the timeout if the component unmounts before the 5-second duration
  //       };
  //     }
  //   }, [appState]);


  return (
    <View style={styles.container}>
      <Text>Hiiii</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  }
})

