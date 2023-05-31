import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { post, remove, put, get } from '../helpers/apiHelper';
import { useAuthContext } from '../hooks/useAuthContext';

export const useTransaction = () => {
    const [params, setParams] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');
    const { user } = useAuthContext();

    const getTransactions = async () => await get(`transactions/user/${user._id}`, { params },
        (data) => {
            setTransactions(data)
            console.log(params);
            console.log('Transactions Viewed successfully')
        }, (error) => setError(error));

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(item => item.id !== id))
        remove(`transactions/${id}`, {}, () => {
            console.log('transaction deleted successfully');
            getTransactions();
        }, (error) => setError(error));
    }

    const editTransaction = (transaction, onSuccess) => {
        console.log(transaction);
        setTransactions(transactions.map((item) => {
            if (item.id === transaction.id) {
                console.log(item.id)
                return transaction
            }
            return item;
        }))
        put(`transactions/${transaction.id}`, transaction, () => {
            console.log('Transaction updated successfully');
            onSuccess?.();
            getTransactions();
        }, (error) => {
            console.error('Failed to update transaction', error);
        });
    };

    const addTransaction = (transaction, onSuccess) => {
        setTransactions([...transactions, transaction])
        post('transactions', transaction, () => {
            console.log('transaction added successfully');
            onSuccess?.();
            getTransactions();
        }, (error) => {
            console.error('Failed to add transaction', error);
        });
    };

    return (
        {
            transactions,
            params,
            error,
            setParams,
            setTransactions,
            getTransactions,
            deleteTransaction,
            addTransaction,
            editTransaction,
        }
    )
}
