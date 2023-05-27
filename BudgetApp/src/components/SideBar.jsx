import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
} from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuthContext } from '../hooks/useAuthContext';
import { primaryColor, textColor } from '../utils/globalStyle';

export const SideBar = ({ navigation }) => {
    const { saveUser } = useAuthContext();
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.logo}
            />
            <DrawerContentScrollView >
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="home-outline" color={primaryColor} size={size} />
                        )}
                        label="Home"
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                        labelStyle={{ color: textColor}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="clipboard-list" color={primaryColor} size={size} />
                        )}
                        label="Categories"
                        onPress={() => {
                            navigation.navigate('Categories');
                        }}
                        labelStyle={{ color: textColor }}
                    />

                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="collapse-all-outline" color={primaryColor} size={size} />
                        )}
                        label="Transactions"
                        onPress={() => {
                            navigation.navigate('AllTransactions');
                        }}
                        labelStyle={{ color: textColor }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="bell-ring-outline" color={primaryColor} size={size} />
                        )}
                        label="Reminders"
                        onPress={() => {
                            navigation.navigate('Reminders');
                        }}
                        labelStyle={{ color: textColor }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons name="chart-areaspline" color={primaryColor} size={size} />
                        )}
                        label="Charts"
                        onPress={() => {
                            navigation.navigate('Charts');
                        }}
                        labelStyle={{ color: textColor }}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="exit-to-app" color={primaryColor} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        navigation.closeDrawer();
                        saveUser(null);
                    }}
                    labelStyle={{ color: textColor }}
                />
            </Drawer.Section>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: primaryColor,
    },
    logo: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    drawerContent: {
        flex: 1,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        color: textColor

    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
});

