import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { post, remove, put, get } from '../helpers/apiHelper';
import { useAuthContext } from './useAuthContext';

export const useBudget = () => {
    const [params, setParams] = useState({ day: 1, month: new Date().getMonth() + 1, year: new Date().getFullYear() });
    const [budgets, setBudgets] = useState([]);
    const [error, setError] = useState('');
    const { user } = useAuthContext();

    const getBudgets = async () => await get(`budgets/user/${user._id}`, { params },
        (data) => {
            setBudgets(data)
            console.log('Budgets Viewed successfully')
        }, (error) => setError(error));

    const deleteBudget = (id) => {
        setBudgets(budgets.filter(item => item.id !== id))
        remove(`budgets/${id}`, {}, () => {
            console.log('budget deleted successfully');
            getBudgets();
        }, (error) => setError(error));
    }

    const editBudget = (budget, onSuccess) => {
        setBudgets(budgets.map((item) => {
            if (item.id === budget.id) {
                return budget
            }
            return item;
        }))
        put(`budgets/${budget.id}`, budget, () => {
            console.log('Budget updated successfully');
            onSuccess?.();
            getBudgets();
        }, (error) => {
            console.error('Failed to update budget', error);
        });
    };

    const addBudget = (budget, onSuccess) => {
        setBudgets([...budgets, { id: '123', ...budget }])
        post('budgets', budget, () => {
            console.log('budget added successfully');
            onSuccess?.();
            getBudgets();
        }, (error) => {
            console.error('Failed to add budget', error);
        });
    };

    useEffect(() => { getBudgets() }, [params]);

    return (
        {
            budgets,
            params,
            error,
            setParams,
            setBudgets,
            getBudgets,
            deleteBudget,
            addBudget,
            editBudget,
        }
    )
}
