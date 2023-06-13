import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { textColor } from '../utils/globalStyle';

export const ReportExpensePieChart = ({ expensesCategories = [] }) => {
  const pieData = expensesCategories.map((item, index) => ({
    value: item.totalExpenses,
    svg: {
      fill: item.categoryColor,
    },
    key: item.categoryId,
    label: item.categoryName,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Categories</Text>
      <PieChart style={styles.chart} data={pieData} />
      <View style={styles.legendContainer}>
        {pieData.map((dataPoint) => (
          <View style={styles.legendItem} key={dataPoint.key}>
            <View style={[styles.legendColor, { backgroundColor: dataPoint.svg.fill }]} />
            <Text style={styles.legendLabel}>{dataPoint.label}</Text>
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
    marginBottom: 20,
    color: textColor,
  },
  chart: {
    height: 200,
    marginBottom: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  legendLabel: {
    fontSize: 12,
    color: textColor,
  },
});