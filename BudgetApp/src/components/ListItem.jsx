import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '../../node_modules/react-native-vector-icons/dist/MaterialIcons';

export default function ListItem({ item }) {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon name="delete" size={20} color="firebrick" />
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: 'eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    }
});
