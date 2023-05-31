import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/globalStyle';

export const MonthYearPicker = ({ date, onChange, disableFutureDates, disablePastDates }) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const thisMonth = () => new Date().getMonth() === selectedMonth && new Date().getFullYear() === selectedYear

    const handlePrevMonth = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear((prevYear) => prevYear - 1);
        } else {
            setSelectedMonth((prevMonth) => prevMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear((prevYear) => prevYear + 1);
        } else {
            setSelectedMonth((prevMonth) => prevMonth + 1);
        }
    };

    useEffect(() => {
        onChange?.(new Date(selectedYear, selectedMonth));
    }, [selectedYear, selectedMonth]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePrevMonth} disabled={disablePastDates && thisMonth()} style={[styles.arrowButton, disablePastDates && thisMonth() && styles.disabled]}>
                <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthPickerButton}>
                <Text style={styles.monthYearText}>
                    {new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                    })}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextMonth} disabled={disableFutureDates && thisMonth()} style={[styles.arrowButton, disableFutureDates && thisMonth() && styles.disabled]}>
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
    monthPickerButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    monthYearText: {
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
    },
});
