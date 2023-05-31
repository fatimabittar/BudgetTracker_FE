import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, textColor } from '../utils/globalStyle';

export const YearPicker = ({ date, onChange, disableFutureDates }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const thisYear = () => new Date().getFullYear() === selectedYear;

  const incrementYear = () => {
    setSelectedYear(selectedYear + 1);
  };

  const decrementYear = () => {
    setSelectedYear(selectedYear - 1);
  };

  useEffect(() => {
    onChange?.(new Date(selectedYear, 0, 1));
  }, [selectedYear]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrementYear} style={styles.arrowButton}>
        <Text style={styles.arrowText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.yearPickerButton}>
        <Text style={styles.selectedYearText}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric' })}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementYear} disabled={disableFutureDates && thisYear()} style={[styles.arrowButton, disableFutureDates && thisYear() && styles.disabled]}>
        <Text style={styles.arrowText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  yearPickerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  selectedYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: primaryColor,
  },
  arrowButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
  },
  arrowText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  disabled: {
    opacity: 0,
  }
});
