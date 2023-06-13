import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from './Icon.jsx';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { useTransaction } from '../hooks/useTransaction.jsx';
import { windowWidth } from '../utils/dimensions.js';

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
            <View style={styles.transaction}>
                <View style={styles.transactionDetails}>
                    <View style={styles.transactionIcon}>
                        <Icon name={transaction.icon} color={transaction.color} size={35} />
                        <Text style={styles.transactionText}>{transaction.categoryName}</Text>
                    </View>
                    <View style={styles.transactionAmountDate}>
                        <Text style={styles.transactionText}>{transaction.date}</Text>
                        <Text style={[styles.transactionAmount, { color: transaction.type === 'expense' ? 'red' : 'green' }]}>{transaction.amount}</Text>
                    </View>
                    {transaction.description && <View style={styles.transactionIcon}>
                        <Icon name="note" color={primaryColor} size={24} />
                        <Text style={styles.transactionText}>{transaction.description}</Text>
                    </View>}
                </View>
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
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    transactionDetails: {
        marginRight: 20,
        width: '100%'
    },
    transactionText: {
        fontSize: 20,
        color: '#333333',
    },
    transactionAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: textColor,
    },
    transactionIcon: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    transactionAmountDate: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
});
