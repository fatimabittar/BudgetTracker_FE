import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { Icon } from './Icon';
import { useCategory } from '../hooks/useCategory';
// import { Stack, FAB } from "@react-native-material/core";
// import ActionButton from 'react-native-action-button/ActionButtonItem.js';
// import Ionicons from 'react-native-vector-icons/Ionicons.js';
import { FloatingButton } from './FloatingButton.jsx';


export const CategoriesList = ({ type, navigation }) => {

  const {
    categories,
    deleteCategory,
    editCategory,
    addCategory } = useCategory(type);

  const onEditCategory = (category) => {
    navigation.navigate('Edit Category', { category, editCategory });
  };

  const onAddCategory = () => {
    console.log('Add new category');
    navigation.navigate('Add Category', { addCategory });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {categories.map((category) => (
          <View key={category._id} style={styles.categoryContainer}>
            <TouchableOpacity onPress={() => deleteCategory(category._id)} style={styles.iconContainer}>
              <Icon name='close-circle-outline' color={primaryColor} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <Icon name={category.icon} color={category.color} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
            <TouchableOpacity onPress={() => onEditCategory(category)} style={styles.iconContainer}>
              <Icon name='pencil-outline' color='green' />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <FloatingButton onPress={onAddCategory} />
    </View>
  )
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  categoryText: {
    color: textColor,
    flex: 1,
    fontSize: 20,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: textColor,
    padding: 10,
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});