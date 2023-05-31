import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { textColor } from '../utils/globalStyle';

export const IconSelectionView = ({ navigation, route }) => {
    const { icon, setIcon } = route.params;
    const icons = [
        'rocket',
        'heart',
        'user',
        'star',
        'check',
        'calendar',
        'camera',
        'music',
        'car',
        'book',
        'coffee',
        'film',
        'globe',
        'home',
        'money',
        'shopping-cart',
        'plane',
        'smile-o',
        'suitcase',
        'trophy',
        'cog',
        'diamond',
        'gavel',
        'gift',
        'graduation-cap',
        'key',
        'laptop',
        'paper-plane',
        'paw',
        'power-off',
        'shield',
        'ship',
        'sun-o',
        'umbrella',
        'wifi',
        'wrench',
        'bicycle',
        'cloud',
        'cutlery',
        'flag',
        'hourglass',
        'leaf',
        'map-marker',
        'paint-brush',
        'pencil',
    ];

    const handleIconSelect = (selectedIcon) => {
        setIcon(selectedIcon);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icons.map((icon) => (
                    <TouchableOpacity
                        key={icon}
                        style={styles.iconButton}
                        onPress={() => handleIconSelect(icon)}
                    >
                        <Icon name={icon} style={styles.icon} />
                        <Text style={styles.iconText}>{icon}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 40,
        backgroundColor: '#eaeaea',
    },
    icon: {
        fontSize: 30,
        color: textColor,
    },
    iconText: {
        color: textColor,
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
    },
});