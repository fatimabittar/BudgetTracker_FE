import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CategoriesList } from '../components/CategoriesList';
import { primaryColor } from '../utils/globalStyle';
import { CategoriesSelection } from '../components/CategorySelection';


const Tab = createMaterialTopTabNavigator();

export const CategorySelectionView = ({ navigation, route, disableIncome, disbaleHasBudget, warnHasTransaction }) => {
    const { onCategorySelect } = route.params;

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15 },
                tabBarStyle: { backgroundColor: '#d9f3c0' },
                tabBarIndicatorStyle: { backgroundColor: primaryColor },
            }}>
            {!disableIncome && <Tab.Screen name="Income" children={(props) => <CategoriesSelection {...props} type='income' disableHasBudget={disbaleHasBudget} warnHasTransaction={warnHasTransaction} onCategorySelect={(catergory) => {
                onCategorySelect(catergory);
                navigation.goBack()
            }} />} />}
            <Tab.Screen name="Expense" children={(props) => <CategoriesSelection  {...props} type='expense' disableHasBudget={disbaleHasBudget} warnHasTransaction={warnHasTransaction} onCategorySelect={(catergory) => {
                onCategorySelect(catergory);
                navigation.goBack()
            }} />} />
        </Tab.Navigator>
    );
};
