import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { primaryColor } from '../utils/globalStyle.js';
import ColorPickerWheel from 'react-native-color-picker-wheel';
import { Icon } from '../components/Icon.jsx';

export const EditCategoryView = ({ navigation, route }) => {
    const { category, editCategory } = route.params;
    const [name, setName] = useState(category.name);
    const [icon, setIcon] = useState(category.icon);
    const [color, setColor] = useState(category.color);


    const onSelectIcon = (selectedIcon) => {
        setIcon(selectedIcon);
    };
    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
    };
    return (
        <ScrollView style={styles.container}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder={`Category Name: ${category.name}`}
                style={styles.input}
            />
            <View style={styles.iconCat}>
                <Icon name={category.icon} color={category.color} />
                <TouchableOpacity onPress={() => navigation.navigate('Icon Selection', { onSelectIcon })} style={styles.iconButton}>
                    <Text style={styles.iconButtonText}>Choose Icon</Text>
                </TouchableOpacity>

            </View>
            <ColorPickerWheel
                onColorChange={handleColorChange}
                style={styles.colorPicker}
            />
            <TouchableOpacity onPress={() => editCategory({ ...category, name, icon, color }, () => navigation.goBack())} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView >
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
        padding: 5,
        borderRadius: 10,
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
    colorPicker: {
        marginTop: 20,
        marginBottom: 30
    },
    iconCat: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
