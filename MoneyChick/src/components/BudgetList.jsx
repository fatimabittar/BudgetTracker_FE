import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle.js';
import { Icon } from './Icon';
import { useCategory } from '../hooks/useCategory';
import { FloatingButton } from './FloatingButton.jsx';
import { useBudget } from '../hooks/useBudget.jsx';
import { MonthYearPicker } from './MonthYearPicker.jsx';
import { ProgressBar } from './ProgressBar.jsx';

const currentOrLastMonth = (type) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  if (type === 'history') {
    if (month === 0) {
      return new Date(Date.UTC(year - 1, 11, 1));
    } else {
      return new Date(Date.UTC(year, month - 1, 1));
    }
  } else {
    return new Date(Date.UTC(year, month, 1));
  }
}

export const BudgetList = ({ type, navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    budgets,
    params,
    setParams,
    getBudgets,
    deleteBudget,
    editBudget,
    addBudget } = useBudget();

  const historyView = type === 'history';

  useEffect(() => {
    setParams({ day: 1, month: new Date(selectedDate).getMonth() + 1, year: new Date(selectedDate).getFullYear() })
  }, [selectedDate])


  // useEffect(() => { getBudgets() }, [params]);

  const onEditBudget = (budget) => {
    navigation.navigate('Edit Budget', { budget, editBudget });
  };

  const onAddBudget = () => {
    console.log('Add new budget');
    navigation.navigate('Add Budget', { addBudget });
  };

  // useEffect(() => { setSelectedDate(currentOrLastMonth(type)) }, [type])

  return (
    <View key={`Budget_${type}`} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <MonthYearPicker date={selectedDate} onChange={setSelectedDate} disableFutureDates disablePastDates={!historyView} />
        {budgets.map((budget) => (

          <View key={budget.id}>
            <View style={styles.budgetContainer}>
              {!historyView && <TouchableOpacity onPress={() => deleteBudget(budget.id)} style={styles.iconContainer}>
                <Icon name='close-circle-outline' color='red' />
              </TouchableOpacity>}
              <View style={styles.iconContainer}>
                <Icon name={budget.icon} color={budget.color} />
              </View>
              <Text style={styles.categoryText}>{budget.categoryName}</Text>
              <Text style={styles.amountText}>{budget.amount}</Text>
              {!historyView && <TouchableOpacity onPress={() => onEditBudget(budget)} style={styles.iconContainer}>
                <Icon name='pencil-outline' color='gray' />
              </TouchableOpacity>}
            </View>
            <ProgressBar done={budget.spentAmount} total={budget.amount} />
          </View>
        ))}
      </ScrollView>
      <FloatingButton onPress={onAddBudget} />
    </View>
  )
};

const styles = StyleSheet.create({
  budgetContainer: {
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
  iconContainer: {
    marginRight: 10,
  },
  categoryText: {
    color: textColor,
    flex: 1,
    fontSize: 20,
    marginRight: 10,
  },
  amountText: {
    color: textColor,
    fontSize: 20,
    marginRight: 20,
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});