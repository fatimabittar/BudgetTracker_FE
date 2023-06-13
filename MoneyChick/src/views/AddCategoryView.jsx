import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import ColorPickerWheel from 'react-native-color-picker-wheel';
import { useAuthContext } from '../hooks/useAuthContext.jsx';
import { Icon } from '../components/Icon.jsx';

export const AddCategoryView = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [type, setType] = useState(''); // Set initial state for the selected category type
    const [color, setColor] = useState('');
    const { user } = useAuthContext();
    const { addCategory } = route?.params ?? {};

    const onSave = () => {
        const newCategory = {
            name,
            icon,
            type,
            color,
            userId: user?._id,
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
        <ScrollView style={styles.container}>
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
            <View style={styles.selectedIconContainer}>
                {icon ? (
                    <Icon name={icon} color={primaryColor} size={24} />
                ) : (
                    <Text style={styles.selectedIconText}>No Icon Selected</Text>
                )}
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={type}
                    onValueChange={(itemValue) => setType(itemValue)}
                    style={styles.picker}
                    prompt="Select Category Type" // Set the default placeholder value
                >
                    <Picker.Item label="Income" value="income" />
                    <Picker.Item label="Expense" value="expense" />
                </Picker>
            </View>
            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <ColorPickerWheel
                onColorChange={handleColorChange}
                style={styles.colorPicker}
            />
        </ScrollView>
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
        color: 'gray',
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
    selectedIconContainer: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedIconText: {
        fontSize: 16,
        color: 'gray',
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
    pickerContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    picker: {
        height: 40,
        width: '100%',
        color: 'gray',
        textAlign: 'center', // Center align the default placeholder value
    },
});
