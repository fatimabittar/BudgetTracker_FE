import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { primaryColor } from '../utils/globalStyle.js';
import { Icon } from '../components/Icon.jsx';
import { FormInput } from '../components/FormInput.jsx';
import { windowHeight } from '../utils/dimensions.js';

export const EditBudgetView = ({ navigation, route }) => {
    const { budget, editBudget } = route.params;
    const [amount, setAmount] = useState(budget.amount);

    const handleAmountChange = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setAmount(numericValue);
    };

    return (
        <ScrollView style={styles.container}>
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
            <View  style={styles.categorySelection}>
                <View style={styles.categoryIcon}>
                    <Icon name={budget.icon} color={budget.color} />
                </View>
                <Text style={styles.categoryName}>{budget.categoryName}</Text>
            </View>
            <TouchableOpacity onPress={() => editBudget({ ...budget, amount }, () => navigation.goBack())} style={styles.saveButton}>
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
