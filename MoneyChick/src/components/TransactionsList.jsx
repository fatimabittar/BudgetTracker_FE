import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { Icon } from './Icon.jsx';
import { useTransaction } from '../hooks/useTransaction.jsx';
import { FloatingButton } from './FloatingButton.jsx';
import { MonthYearPicker } from './MonthYearPicker.jsx';
import { YearPicker } from './YearPicker.jsx';
import { DayMonthYearPicker } from './DayMonthYearPicker.jsx';
import { useIsFocused } from '@react-navigation/native';


export const TransactionsList = ({ navigation, type }) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [showPicker, setShowPicker] = useState(false);
  const {
    transactions,
    params,
    setParams,
    getTransactions,
    deleteTransaction,
    editTransaction,
    addTransaction,
  } = useTransaction();

  useEffect(() => {
    setParams({ day: type === 'day' ? new Date(selectedDate).getDate() : undefined, month: type !== 'year' ? new Date(selectedDate).getMonth() + 1 : undefined, year: new Date(selectedDate).getFullYear() })
  }, [selectedDate])


  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getTransactions()
    }
  }, [params, isFocused])

  const onAddTransaction = () => {
    console.log('Add new transaction');
    navigation.navigate('Add Transaction', { addTransaction });
  };

  const handleTransactionPress = (transaction) => {
    navigation.navigate('Transaction Modal', { transaction, deleteTransaction, editTransaction });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {type === 'day'
          ? <DayMonthYearPicker date={selectedDate} onChange={setSelectedDate} />
          : type === 'month'
            ? <MonthYearPicker date={selectedDate} onChange={setSelectedDate} />
            : <YearPicker date={selectedDate} onChange={setSelectedDate} />}

        {transactions.map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            style={styles.transactionContainer}
            onPress={() => handleTransactionPress(transaction)}
          >
            <View style={styles.transactionDetails}>
              <View style={styles.transactionFirst}>
                <Icon name={transaction.icon} color={transaction.color} />
                <Text style={styles.transactionText}>{transaction.categoryName}</Text>
              </View>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FloatingButton onPress={onAddTransaction} />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  transactionDetails: {
    flexDirection: 'column',
    flex: 1,
  },
  transactionFirst: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionText: {
    color: textColor,
    fontSize: 16,
    marginLeft: 10,
  },
  transactionDate: {
    color: textColor,
    fontSize: 12,
    marginLeft: 10,
  },
  transactionAmount: {
    color: primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 8,
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
});
