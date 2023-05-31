import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/dimensions';




export const LaunchView = () => {

  return (
<View>
    <Image
      source={require('../../assets/images/logo.gif')}
      style={styles.gif}
    />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  gif: {
    width: windowWidth,
    height: windowHeight+30,
  },
})

