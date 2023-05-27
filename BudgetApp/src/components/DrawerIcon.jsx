import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerIcon = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View style={{ marginRight: 30 }}>
          <MaterialCommunityIcons name="menu" color="black" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
