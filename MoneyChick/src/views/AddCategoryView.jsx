import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import ColorPickerWheel from 'react-native-color-picker-wheel';
import { useAuthContext } from '../hooks/useAuthContext.jsx';

export const AddCategoryView = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const { user } = useAuthContext();
    const { addCategory } = route?.params ?? {};
    console.log(icon)

    const onSave = () => {
        const newCategory = {
            name,
            icon,
            type,
            color,
            userId: user?._id
        };

        addCategory?.(newCategory, () => {
            console.log('Category added successfully');
            navigation.goBack();
        });
    };

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor);
    };

    const navigateToIconSelection = () => {
        navigation.navigate('Select Icon', { icon, setIcon });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Category</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Category Name"
                style={styles.input}
            />
            <TouchableOpacity onPress={navigateToIconSelection} style={styles.iconButton}>
                <Text style={styles.iconButtonText}>Select Icon</Text>
            </TouchableOpacity>
            <Text style={styles.selectedIconText}>{icon}</Text>
            <TextInput
                value={type}
                onChangeText={setType}
                placeholder="Category Type"
                style={styles.input}
            />
            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <ColorPickerWheel
                onColorChange={handleColorChange}
                style={styles.colorPicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'gray'
    },
    iconButton: {
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    iconButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: textColor,
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 5,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: textColor,
        textAlign: 'center',
    },
    colorPicker: {
        marginTop: 20,
    },
    selectedIconText: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'gray'
    }
});

