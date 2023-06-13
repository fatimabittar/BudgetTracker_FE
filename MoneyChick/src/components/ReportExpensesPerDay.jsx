import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { windowWidth } from '../utils/dimensions';
import { textColor } from '../utils/globalStyle';

export const ReportExpensesPerDay = ({ expensesPerDay = [] }) => {
  const barChartData = expensesPerDay.map((expense) => ({
    value: expense.totalExpenses,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses for This Week</Text>
      <View style={styles.rowContainer}>
        {expensesPerDay.map((expense, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.budgetQuantityText}>{expense.totalExpenses}</Text>
          </View>
        ))}
      </View>
      <BarChart
        style={styles.chartStyle}
        data={barChartData}
        svg={{ fill: 'rgba(90,161,97,1)' }}
        yAccessor={({ item }) => item.value} // Access the value property for y-axis
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        gridMin={0}
      >
        <Grid />
      </BarChart>
      <View style={styles.rowContainer}>
        {expensesPerDay.map((expense, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.dayText}>{expense._id}</Text>
          </View>
        ))}
      </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: textColor,
  },
  chartStyle: {
    height: 220,
    color: textColor,
    width: windowWidth * 0.8,
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 8,
    fontWeight: 'bold',
    transform: [{ rotate: '45deg' }],
  },
  budgetQuantityText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 20,
    color: textColor,
  },
});
