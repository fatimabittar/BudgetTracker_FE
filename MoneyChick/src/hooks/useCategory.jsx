import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { post, remove, put, get } from '../helpers/apiHelper';
import { useAuthContext } from '../hooks/useAuthContext';

export const useCategory = (type) => {
    
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const { user } = useAuthContext();

    const getCategories = async () => await get('categories/user', {
        params: {
            userId: user._id,
            type,
        }
    }, (data) => {
        setCategories(data)
        console.log('Categories Viewed successfully')
    }, (error) => setError(error));

    const deleteCategory = (id) => {
        setCategories(categories.filter(item => item._id !== id))
        remove(`categories/${id}`, {}, () => {
            console.log('category deleted successfully');
            getCategories();
        }, (error) => setError(error));
    }

    const editCategory = (category, onSuccess) => {
        setCategories(categories.map((item) => {
            if (item._id == category._id) {
                return category
            }
            return item;
        }))
        put(`categories/${category._id}`, category, () => {
            console.log('Category updated successfully');
            getCategories();
            onSuccess?.();
        }, (error) => {
            console.error('Failed to update category', error);
        });
    };

    const addCategory = (category, onSuccess) => {
        setCategories([...categories, { _id: "1", ...category }])
        post('categories', category, () => {
            console.log('Category added successfully');
            getCategories();
            onSuccess?.();
        }, (error) => {
            console.error('Failed to add category', error);
        });
    };

    useEffect(() => { getCategories() }, []);

    return (
        {
            categories,
            error,
            setCategories,
            getCategories,
            deleteCategory,
            addCategory,
            editCategory,
        }
    )
}
