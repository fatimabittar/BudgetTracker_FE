import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/globalStyle.js';

export const EditCategoryView = ({ navigation, route }) => {
    const { category, editCategory } = route.params;
    const [name, setName] = useState(category.name);
    const [icon, setIcon] = useState(category.icon);

    const onSelectIcon = (selectedIcon) => {
        setIcon(selectedIcon);
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder={`Category Name: ${category.name}`}
                style={styles.input}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Icon Selection', { onSelectIcon })} style={styles.iconButton}>
                <Text style={styles.iconButtonText}>Choose Icon</Text>
            </TouchableOpacity>
            <Text style={styles.selectedIconText}>Selected Icon: {icon}</Text>
            <TouchableOpacity onPress={() => editCategory({ ...category, name, icon }, () => navigation.goBack())} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    iconButton: {
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    iconButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    selectedIconText: {
        fontSize: 16,
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 5,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});
