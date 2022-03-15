import { StyleSheet } from 'react-native';

export const tabsStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    tab: {
        flex: 1
    },

    tabsControl: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    control: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    controlText: {
        fontSize: 18,
        fontWeight: '300'
    },
})