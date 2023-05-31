import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { PieChart } from 'react-native-svg-charts';
import { primaryColor, textColor } from '../utils/globalStyle';
// import { Circle, G, Line, Text as SVGText } from 'react-native-svg';


export const ReportExpensePieChart = ({ expensesCategories = [] }) => {
  const pieData = expensesCategories.map((item, index) => ({
    value: item.totalExpenses,
    svg: {
      fill: item.categoryColor,
    },
    key: item.categoryId,
    label: item.categoryName,
  }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <G key={index}>
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={pieCentroid[0]}
            y2={pieCentroid[1]}
            stroke={textColor}
          />
          <Circle
            cx={labelCentroid[0]}
            cy={labelCentroid[1]}
            r={14}
            fill={data.svg.fill}
          />
          <SVGText
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            fill={textColor}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={13}
            fontWeight="bold"
          >
            {data.label}
          </SVGText>
        </G>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Categories</Text>
      <PieChart style={styles.chart} data={pieData}>
        <Labels />
      </PieChart>
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
  },
});