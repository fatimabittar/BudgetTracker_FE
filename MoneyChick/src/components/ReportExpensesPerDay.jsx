import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
import { windowWidth } from '../utils/dimensions';
import { textColor } from '../utils/globalStyle';

export const ReportExpensesPerDay = ({ expensesPerDay = [] }) => {

  const barChartData = {
    labels: expensesPerDay.map((expense) => expense._id),
    datasets: [
      {
        data: expensesPerDay.map((expense) => expense.totalExpenses),
      },
    ],
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Expenses for This Week</Text>
      <BarChart
        data={barChartData}
        width={windowWidth * 0.8}
        height={220}
        yLabelsOffset={-5}
        yAxisSuffix='$'
        chartConfig={chartConfig}
        style={styles.chartStyle}
        showBarTops
        showValuesOnTopOfBars
        withVerticalLabels
        
      />
    </View>
  );
};

const chartConfig = {
  backgroundColor: textColor,
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',

  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(90,161,97, ${opacity})`, // Green color scheme
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',

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
    marginTop: 15,
    left: 0,
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
});
