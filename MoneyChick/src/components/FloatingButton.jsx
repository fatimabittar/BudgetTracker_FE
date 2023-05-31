import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from './Icon';
import { primaryColor } from '../utils/globalStyle';

export const FloatingButton = ({ onPress }) => {
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touchableOpacityStyle}>
      <View style={styles.floatingButtonStyle}>
        <Icon name='plus' />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  floatingButtonStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    resizeMode: 'contain',
    width: 50,
    height: 50,
    backgroundColor: primaryColor
  },
});
