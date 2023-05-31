import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from './Icon.jsx';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { useTransaction } from '../hooks/useTransaction.jsx';

export const TransactionModal = ({ navigation, route }) => {
    const { transaction, deleteTransaction, editTransaction } = route.params;

    const onEditTransaction = () => {
        navigation.navigate('Edit Transaction', { transaction, editTransaction: (...props) => { editTransaction(...props); navigation.goBack(); } });
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.transaction}>
                <TouchableOpacity onPress={navigateBack}>
                    <Icon name="arrow-left-thick" color={textColor} />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => {
                        deleteTransaction(transaction.id)
                        navigateBack()
                    }} style={styles.iconButton}>
                        <Icon name="delete-outline" color={primaryColor} size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onEditTransaction} style={styles.iconButton}>
                        <Icon name="pencil-outline" color={primaryColor} size={24} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.transaction}>
                <View style={styles.transactionDetails}>
                    <View style={styles.transactionIcon}>
                        <Icon name={transaction.icon} color={transaction.color} size={64} />
                    </View>
                    <Text style={styles.transactionText}>{transaction.categoryName}</Text>
                    <Text style={styles.transactionText}>{transaction.date}</Text>
                    <Text style={styles.transactionDescription}>{transaction.description}</Text>
                </View>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        elevation: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200,

    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconButton: {
        marginLeft: 10,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    transactionDetails: {
        marginRight: 20,
    },
    transactionText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333333',
    },
    transactionAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: textColor,
        alignSelf: 'flex-end',
    },
    transactionIcon: {
        marginBottom: 10,
    },
    transactionDescription: {
        fontSize: 16,
        color: textColor,
        textAlign: 'center',
    },
});
