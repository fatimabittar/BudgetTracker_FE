import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useReport } from '../hooks/useReport'
import { ReportForSpentBudget } from '../components/ReportForSpentBudget';
import { ReportExpensesPerDay } from '../components/ReportExpensesPerDay';
import { useIsFocused } from '@react-navigation/native';
import { ReportExpensePieChart } from '../components/ReportExpensePieChart';
import { ReportForWalletAmount } from '../components/ReportForWalletAmount';

export const HomeView = () => {
    const { budgetsSpent, expensesPerDay, expensesCategories, walletAmount, getBudgetsSpent, getExpensesPerDay, getExpensesCategories, getWalletAmount } = useReport();

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getBudgetsSpent();
            getExpensesPerDay();
            getExpensesCategories();
            getWalletAmount();
        }
    }, [isFocused])

    return (
        <ScrollView>
            <ReportForWalletAmount walletAmount={walletAmount} />
            <ReportForSpentBudget budgetsSpent={budgetsSpent} />
            <ReportExpensesPerDay expensesPerDay={expensesPerDay} />
            <ReportExpensePieChart expensesCategories={expensesCategories}/>
        </ScrollView>
    )
}
