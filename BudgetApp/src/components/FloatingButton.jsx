import React from 'react';
import { View } from 'react-native';
import { FAB } from '@react-native-material/core';
import { Icon } from './Icon';
import { primaryColor } from '../utils/globalStyle';

export const FloatingButton = ({ onPress }) => {
  return (
    <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
      <FAB
        icon={<Icon name="plus" />}
        color={primaryColor}
        onPress={onPress}
      />
    </View>
  );
};