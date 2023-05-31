import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';

export const EditTransactionView = ({ navigation, route }) => {
    const { transaction, editTransaction } = route.params;
    const [description, setDescription] = useState(transaction.description);
    const [amount, setAmount] = useState(transaction.amount);
    const [date, setDate] = useState(new Date(transaction.date));
    console.log(transaction, amount)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{transaction.categoryName} Category:</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder={transaction.description ? transaction.description : 'Add description'}
                style={styles.input}
            />
            <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder={` Amount: ${transaction.amount}`}
                style={styles.input}
            />
            <TextInput
                value={date}
                onChangeText={setDate}
                placeholder={` Date: ${transaction.date}`}
                style={styles.input}
            />

            <TouchableOpacity onPress={() => editTransaction({ ...transaction, description, amount, date }, () => navigation.navigate('Transaction View'))} style={styles.saveButton}>
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
    header: {
        color: textColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20
    }
});
