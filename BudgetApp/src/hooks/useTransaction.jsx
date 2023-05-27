import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { post, remove, put, get } from '../helpers/apiHelper';
import { useAuthContext } from '../hooks/useAuthContext';

export const useTransaction = () => {

    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');
    const { user } = useAuthContext();

    const getTransactions = async () => await get(`transactions/user/${user._id}`, {},
        (data) => {
            setTransactions(data)
            console.log('Transactions Viewed successfully')
        }, (error) => setError(error));

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(item => item._id !== id))
        remove(`transactions/${id}`, {}, () => {
            console.log('transaction deleted successfully');
            getTransactions();
        }, (error) => setError(error));
    }

    const editTransaction = (transaction, onSuccess) => {
        console.log(transaction);
        setTransactions(transactions.map((item) => {
            if (item._id == transaction._id) {
                console.log(item._id)
                return transaction
            }
            return item;
        }))
        put(`transactions/${transaction._id}`, transaction, () => {
            console.log('Transaction updated successfully');
            getTransactions();
            onSuccess?.();
        }, (error) => {
            console.error('Failed to update transaction', error);
        });
    };

    const addTransaction = (transaction, onSuccess) => {
        setTransactions([...transactions, transaction])
        post('transactions', transaction, () => {
            console.log('transaction added successfully');
            getTransactions()
            onSuccess?.();
        }, (error) => {
            console.error('Failed to add transaction', error);
        });
    };

    useEffect(() => { getTransactions() }, []);

    return (
        {
            transactions,
            error,
            setTransactions,
            getTransactions,
            deleteTransaction,
            addTransaction,
            editTransaction,
        }
    )
}
