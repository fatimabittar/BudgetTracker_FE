import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { Icon } from './Icon';
import { useCategory } from '../hooks/useCategory';
import { FloatingButton } from './FloatingButton.jsx';

export const CategoriesSelection = ({ type, onCategorySelect, disbaleHasBudget }) => {
    
    const { categories } = useCategory(type);


    const handleCategoryPress = (category) => {
        onCategorySelect(category);
    };

    return (
        <ScrollView>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category._id}
                    style={[styles.categoryContainer, disbaleHasBudget && category.categoryHasBudget && styles.disabled]}
                    onPress={() => handleCategoryPress(category)}
                    disabled={disbaleHasBudget && category.categoryHasBudget}>
                    <View style={styles.iconContainer}>
                        <Icon name={category.icon} color={category.color} />
                    </View>
                    <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

    );
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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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
    disabled: {
        opacity: 0.3,
    }
});
