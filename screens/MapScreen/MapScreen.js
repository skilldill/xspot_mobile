import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import { MapView } from '../../components';
import { mapScreenStyles as styles } from './style';

export const MapScreen = () => {
    const [mode, setMode] = useState('view');
    const [coords, setCoords] = useState();


    const handleSelectCoords = (mapCoords) => {
        if (mode === 'create') {
            setCoords(mapCoords);
        }
    }

    const toggleMode = () => {
        setMode((prevMode) => {
            return prevMode === 'view' ? 'create' : 'view';
        })
    }

    return (
        <View style={styles.screen}>
            <MapView 
                onSelectCoords={handleSelectCoords}
            />

            {!coords && (
                <Pressable 
                    style={styles.modeButton}
                    onPress={toggleMode}
                >
                    <Text style={styles.modeButtonText}>
                        {mode === 'view' ? 'Добавить спот' : 'Просмотр'}
                    </Text>
                </Pressable>
            )}

            {!!coords && (
                <View style={styles.approveModal}>
                    <View style={styles.approveModalContent}>
                        <Text style={styles.approveModalText}>
                            Создать спот в этой точке?
                        </Text>
                        <View style={styles.approveModalControls}>
                            <Pressable 
                                style={[styles.control, styles.controlCreate]}
                                onPress={() => {}}
                            >
                                <Text style={styles.controlCreateText}>
                                    Создать
                                </Text>
                            </Pressable>

                            <Pressable
                                style={[styles.control, styles.controlCancel]}
                                onPress={() => {setCoords(undefined)}}
                            >
                                <Text style={styles.controlCancelText}>Отмена</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}