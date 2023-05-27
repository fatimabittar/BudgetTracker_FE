import { Platform, DatePickerIOS, DateTimePickerAndroid } from 'react-native';
import DatePicker from 'react-datepicker'; // Example third-party library for web
import 'react-datepicker/dist/react-datepicker.css';

export const MyDateTimePicker = () => {
    if (Platform.OS === 'ios') {
        return <DatePickerIOS />;
    } else if (Platform.OS === 'android') {
        console.log('hi');
        return <DateTimePickerAndroid />;
    }
    //  else if (Platform.OS === 'web') {
    console.log('what');
    return <DatePicker />;
    // }

    // retutrn null;
};