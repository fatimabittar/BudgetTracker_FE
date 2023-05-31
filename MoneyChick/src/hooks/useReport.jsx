import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { post, remove, put, get } from '../helpers/apiHelper';
import { useAuthContext } from './useAuthContext';

export const useReport = () => {
    const [budgetsSpent, setBudgetsSpent] = useState();
    const [expensesPerDay, setExpensesPerDay] = useState();
    const [expensesCategories, setExpensesCategories] = useState();
    const [walletAmount, setWalletAmount] = useState(0);
    const [error, setError] = useState('');
    const { user } = useAuthContext();

    const getBudgetsSpent = async () => await get(`reports/user/${user._id}/budgets-spent`, {}, (data) => {
        console.log('Report Viewed successfully')
        setBudgetsSpent(data)
    }, (error) => setError(error));

    const getExpensesPerDay = async () => await get(`reports/user/${user._id}/expenses-per-day`, {}, (data) => {
        console.log('Report Viewed successfully')
        setExpensesPerDay(data)
    }, (error) => setError(error));


    const getExpensesCategories = async () => await get(`reports/user/${user._id}/expenses-categories`, {}, (data) => {
        console.log('Report Viewed successfully')
        setExpensesCategories(data)
    }, (error) => setError(error));

    const getWalletAmount = async () => await get(`reports/user/${user._id}/wallet-amount`, {}, (data) => {
        console.log('Report Viewed successfully', data)
        setWalletAmount(data.currentAmountInWallet)
    }, (error) => setError(error));

    return (
        {
            budgetsSpent,
            expensesPerDay,
            expensesCategories,
            walletAmount,
            getBudgetsSpent,
            getExpensesPerDay,
            getExpensesCategories,
            getWalletAmount,
        }
    )
}
