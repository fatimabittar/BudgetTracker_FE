import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { useAuthContext } from '../hooks/useAuthContext.jsx';
import { Icon } from '../components/Icon.jsx';
import { FormInput } from '../components/FormInput.jsx';
import { windowHeight } from '../utils/dimensions.js';
import { FormDatePicker } from '../components/FormDatePicker.jsx';


export const EditTransactionView = ({ navigation, route }) => {
    const { transaction, editTransaction } = route.params;
    const [description, setDescription] = useState(transaction.description);
    const [amount, setAmount] = useState(transaction.amount.toString());
    const [category, setCategory] = useState({ name: transaction.categoryName, icon: transaction.icon, color: transaction.color, type: transaction.type });
    const [date, setDate] = useState(new Date(transaction.date));

    const onSave = () => {
        const updatedTransaction = {
            ...transaction,
            description,
            amount: parseFloat(amount),
            date: date.toDateString()
        };

        editTransaction(updatedTransaction, () => {
            console.log('Transaction edited successfully');
            navigation.goBack();
        });
    };

    const onCategorySelect = () => {
        navigation.navigate('Select Category', { onCategorySelect: setCategory })
    };

    const handleAmountChange = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setAmount(numericValue);
    };

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
            <TouchableOpacity disabled onPress={onCategorySelect} style={styles.categorySelection}>
                {category ?
                    <>
                        <View style={styles.categoryIcon}>
                            <Icon name={category.icon} color={category.color} />
                        </View><Text style={styles.categoryName}>{category.name}</Text>
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
            <FormInput
                labelValue={description}
                onChangeText={setDescription}
                placeholderText="Description"
                familyIcon="Fontisto"
                iconType="prescription"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormDatePicker date={date} onChange={setDate} />

            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
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
        opacity: 0.7
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