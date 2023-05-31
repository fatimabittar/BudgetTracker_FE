import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CategoriesList } from '../components/CategoriesList';
import { primaryColor } from '../utils/globalStyle';


const Tab = createMaterialTopTabNavigator();

export const CategoryView = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15 },
                tabBarStyle: { backgroundColor: '#d9f3c0' },
                tabBarIndicatorStyle: { backgroundColor: primaryColor },
            }}>
            <Tab.Screen name="Income" children={(props) => <CategoriesList {...props} type='income' />} />
            <Tab.Screen name="Expense" children={(props) => <CategoriesList  {...props} type='expense' />} />
        </Tab.Navigator>
    );
};
