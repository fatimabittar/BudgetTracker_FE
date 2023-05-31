import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { Icon } from './Icon';
import { useNavigation } from '@react-navigation/native';
import { primaryColor, textColor } from '../utils/globalStyle';

export const ReportForSpentBudget = ({ budgetsSpent = {} }) => {
    const { totalBudgets, totalSpentAmount, totalUnbudgetedAmount } = budgetsSpent;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={[styles.label, styles.title]}>Budget for this month:</Text>
                <Text style={styles.value}>{totalBudgets}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Total spent amount:</Text>
                <Text style={styles.value}>{totalSpentAmount}</Text>
            </View>

            <ProgressBar done={totalSpentAmount} total={totalBudgets} />

            {totalUnbudgetedAmount > 0 && (
                <View style={styles.warningContainer}>
                    <View style={styles.row}>
                        <Text style={styles.description}>Transactions without Budget</Text>
                        <Icon name='alert-outline' color='#eed202' />
                    </View>
                    <Text style={styles.description}>
                        You have {totalUnbudgetedAmount} transaction(s) without a budget for this month.
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Budgets')}>
                        <Text style={styles.buttonText}>Go to Budget List</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 20,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        textAlign: 'left',
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    warningContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: primaryColor,
        borderRadius: 5,
        marginLeft: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: textColor,
      },
});
