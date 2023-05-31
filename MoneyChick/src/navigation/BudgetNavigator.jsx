import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { textColor } from '../utils/globalStyle.js';
import { CategorySelectionView } from '../views/CategorySelectionView.jsx';
import { BudgetsView } from '../views/BudgetView.jsx';
import { EditBudgetView } from '../views/EditBudgetView.jsx';
import { AddBudgetView } from '../views/AddBudgetView.jsx';


const Stack = createNativeStackNavigator();

export const BudgetNavigator = () => {

    return (<Stack.Navigator>
        <Stack.Screen name="Budget List" component={BudgetsView} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Budget" component={EditBudgetView} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
        {/* <Stack.Screen name="Icon Selection" component={IconSelectionView} /> */}
        <Stack.Screen name="Add Budget" component={AddBudgetView} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
        <Stack.Screen name="Select Category" children={(props) => <CategorySelectionView {...props} disableIncome disbaleHasBudget />} options={{
            headerStyle: {
                backgroundColor: '#d9f3c0',
            },
            headerTintColor: textColor,
            headerShadowVisible: false,
        }} />
    </Stack.Navigator>)
}

// return (
//     <Stack.Navigator>
//         <Stack.Screen name="Budget View" component={() =>
//             <Stack.Navigator>
//                 <Stack.Screen name="Budget List" component={BudgetsView} options={{ headerShown: false }} />
//                 <Stack.Screen name="Budget Modal" component={BudgetModal} />
//                 <Stack.Screen name="Edit Budget" component={EditTransactionView} options={{
//                     headerStyle: {
//                         backgroundColor: '#d9f3c0',
//                     },
//                     headerTintColor: textColor,
//                     headerShadowVisible: false,
//                 }} />
//                 <Stack.Screen name="Add Budget" component={AddTransactionView} options={{
//                     headerStyle: {
//                         backgroundColor: '#d9f3c0',
//                     },
//                     headerTintColor: textColor,
//                     headerShadowVisible: false,
//                 }} />
//                 <Stack.Screen name="Select Category"
//                     // component={CategorySelectionView}
//                     children={(props) => <CategoriesSelection {...props} type='income' onCategorySelect={(catergory) => {
//                         onCategorySelect(catergory);
//                         navigation.goBack()
//                     }} />}
//                     options={{
//                         headerStyle: {
//                             backgroundColor: '#d9f3c0',
//                         },
//                         headerTintColor: textColor,
//                         headerShadowVisible: false,
//                     }} />
//             </Stack.Navigator>}
//             options={{ headerShown: false }} />


//     </Stack.Navigator>
// )