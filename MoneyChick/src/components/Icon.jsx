
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = ({ name, color, size = 24 }) => {
    return <MaterialCommunityIcons name={name} color={color} size={size} />;
}