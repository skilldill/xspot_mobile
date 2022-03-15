import { StyleSheet } from 'react-native';

export const mapScreenStyles = StyleSheet.create({
    screen: {
        flex : 1
    },

    approveModal: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    approveModalContent: {
        backgroundColor: '#000',
        borderRadius: 25
    },

    approveModalText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 30
    },

    approveModalControls: {
        flexDirection: 'row',
        width: '80%',
        padding: 15,
        height: 80
    },

    control: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    controlCreate: {
        backgroundColor: '#e0e0e0'
    },

    controlCancel: {

    },

    controlCreateText: {
        color: '#000',
        fontSize: 18
    },

    controlCancelText: {
        color: '#e0e0e0',
        fontSize: 18
    },

    modeButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 25,
        backgroundColor: '#000'
    },

    modeButtonText: {
        fontSize: 18,
        color: '#fff'
    }
})