import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryView } from '../views/CategoryView.jsx';
import { EditCategoryView } from '../views/EditCategoryView.jsx';
import { textColor } from '../utils/globalStyle.js';
import { AddCategoryView } from '../views/AddCategoryView.jsx';
import { IconSelectionView } from '../views/IconSelectionView.jsx';


const Stack = createNativeStackNavigator();

export const CategoryNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoryList" component={CategoryView} options={{ headerShown: false }} />
            <Stack.Screen name="Edit Category" component={EditCategoryView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="Add Category" component={AddCategoryView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="Select Icon" component={IconSelectionView} options={{
                headerStyle: {
                    backgroundColor: '#d9f3c0',
                },
                headerTintColor: textColor,
                headerShadowVisible: false,
            }} />

        </Stack.Navigator>
    )
}