import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/globalStyle';
import { DatePicker } from './DatePicker';

export const DayMonthYearPicker = ({ date, onChange, disableFutureDates }) => {
    const [selectedDay, setSelectedDay] = useState(new Date().getDate());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const isToday = () => new Date().getDate() === selectedDay && new Date().getMonth() === selectedMonth && new Date().getFullYear() === selectedYear

    const handlePrevDay = () => {
        if (selectedDay === 1) {
            setSelectedDay(31);
            handlePrevMonth();
        } else {
            setSelectedDay((prevDay) => prevDay - 1);
        }
    };

    const handleNextDay = () => {
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
        if (selectedDay === daysInMonth) {
            setSelectedDay(1);
            handleNextMonth();
        } else {
            setSelectedDay((prevDay) => prevDay + 1);
        }
    };

    const handlePrevMonth = () => {
        if (selectedMonth === 0) {
            setSelectedMonth(11);
            handlePrevYear()
        } else {
            setSelectedMonth((prevMonth) => prevMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (selectedMonth === 11) {
            setSelectedMonth(0);
            handleNextYear()
        } else {
            setSelectedMonth((prevMonth) => prevMonth + 1);
        }
    };

    const handlePrevYear = () => {
        setSelectedYear((prevYear) => prevYear - 1);
    };

    const handleNextYear = () => {
        setSelectedYear((prevYear) => prevYear + 1);
    };

    useEffect(() => {
        onChange?.(new Date(selectedYear, selectedMonth, selectedDay));
    }, [selectedYear, selectedMonth, selectedDay]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePrevDay} style={styles.dayButton}>
                <Text style={styles.dayText}>{'<'}</Text>
            </TouchableOpacity>
            <DatePicker date={date} onChange={onChange}  style={styles.datePickerButton}>
                <Text style={styles.datePickerText}>
                    {selectedDay}/{selectedMonth + 1}/{selectedYear}
                </Text>
            </DatePicker>

            <TouchableOpacity onPress={handleNextDay} disabled={disableFutureDates && isToday()} style={[styles.dayButton, disableFutureDates && isToday() && styles.disabled]} >
                <Text style={styles.dayText}>{'>'}</Text>
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
    dayButton: {
        backgroundColor: '#E0E0E0',
        padding: 10,
    },
    dayText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    datePickerButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    datePickerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColor,
    },
    disabled: {
        opacity: 0,
    },
});
