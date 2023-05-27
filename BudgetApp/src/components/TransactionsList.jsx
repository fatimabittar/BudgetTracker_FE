import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { Icon } from './Icon.jsx';
import { useTransaction } from '../hooks/useTransaction.jsx';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import YearMonthPicker from './MonthYearPicker.jsx';
import { FloatingButton } from './FloatingButton.jsx';
import { MyDateTimePicker } from './DatePicker.jsx';


export const TransactionsList = ({ navigation }) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const {
    transactions,
    deleteTransaction,
    editTransaction,
    addTransaction,
  } = useTransaction();

  const onEditTransaction = (transaction) => {
    navigation.navigate('Edit Transaction', { transaction, editTransaction });
  };

  const toggleDatePicker = () => setShowPicker(!showPicker);

  const onAddTransaction = () => {
    console.log('Add new transaction');
    navigation.navigate('Add Transaction', { addTransaction });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          {/* <DatePicker
          style={{ width: 200 }}
          mode="date"
          format="MM/DD/YYYY"
          date={selectedDate}
          onDateChange={setSelectedDate}
        /> */}
          {/* {!showPicker &&<TouchableOpacity style={styles.addButton} onPress={()=> toggleDatePicker()}>
        <Text style={styles.addButtonLabel}>DateDate</Text>
      </TouchableOpacity>} */}
          {/* {showPicker && <DateTimePicker style={{ width: 200 }}
        
          mode="date"
          format="MM/DD/YYYY"
          date={selectedDate}
          onDateChange={(date) => {
            setSelectedDate(date);
            toggleDatePicker()
          }}/>} */}
          <MyDateTimePicker />
          {/* <YearMonthPicker visiable handleSelectDate={setSelectedDate} /> */}
        </View>
        {transactions.map((transaction) => (
          <View key={transaction._id} style={styles.transactionContainer}>
            {/* <TouchableOpacity
            onPress={() => deleteTransaction(transaction._id)}
            style={styles.iconContainer}
          > */}
            {/* <Icon name="close-circle-outline" color={transaction.color} /> */}
            {/* </TouchableOpacity> */}
            <Icon name={transaction.icon} color={primaryColor} />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionText}>{transaction.categoryName}</Text>
              <Text style={styles.transactionText}>{transaction.date}</Text>
            </View>
            <Text style={styles.transactionText}>{transaction.amount}</Text>
            {/* <Text style={styles.transactionText}>{transaction.description}</Text> */}
            {/* <TouchableOpacity
            onPress={() => onEditTransaction(transaction)}
            style={styles.iconContainer}
          >
            <Icon name="pencil-outline" color="green" />
          </TouchableOpacity> */}
          </View>
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
  },
  iconContainer: {
    marginRight: 10,
  },
  transactionText: {
    color: textColor,
    flex: 1,
    fontSize: 20,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: textColor,
    padding: 10,
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: textColor,
  },
  transactionDetails: {

  }
});
