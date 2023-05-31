import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import ColorPickerWheel from 'react-native-color-picker-wheel';
import { useAuthContext } from '../hooks/useAuthContext.jsx';
import { windowHeight } from '../utils/dimensions.js';
import { FormInput } from '../components/FormInput.jsx';
import { Icon } from '../components/Icon.jsx';

export const AddBudgetView = ({ navigation, route }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState();
    const { user } = useAuthContext();
    const { addBudget } = route?.params ?? {};

    const handleAmountChange = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setAmount(numericValue);
    };

    const onSave = () => {
        const now = new Date();
        const newBudget = {
            userId: user?._id,
            categoryId: category?._id,
            categoryName: category?.name,
            icon: category?.icon,
            color: category?.color,
            amount,
            startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1)).toISOString(),
            endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth() + 1, 0)).toISOString(),
        };
        addBudget?.(newBudget, () => {
            console.log('Budget added successfully');
            navigation.goBack();
        });
    };

    const onCategorySelect = () => {
        navigation.navigate('Select Category', { onCategorySelect: setCategory })
    }



    return (
        <View style={styles.container}>
            <FormInput
                labelValue={amount}
                onChangeText={handleAmountChange}
                placeholderText="Amount"
                keyboardType="decimal-pad"
                familyIcon="Fontisto"
                iconType="dollar"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity onPress={onCategorySelect} style={styles.categorySelection}>
                {category ?

                    <>
                        <View style={styles.categoryIcon}>
                            <Icon name={category.icon} color={category.color} />
                        </View>
                        <Text style={styles.categoryName}>{category.name}</Text>
                    </>
                    :
                    <>
                        <View style={styles.categoryIcon}>
                            <Icon name='help' color='gray' />
                        </View>
                        <Text style={styles.categoryName}>Select Category</Text>
                    </>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
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
    categorySelection: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    categoryIcon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    categoryName: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
