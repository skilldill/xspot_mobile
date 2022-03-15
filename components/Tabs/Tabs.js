import React, { useEffect, useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import { tabsStyles as styles } from './style';

export const Tabs = ({ tabs }) => {
    const [active, setActive] = useState(undefined);

    useEffect(() => {
        setActive(tabs[0]);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.tabsControl}>
                {tabs.map((tabItem, i) => 
                    <Pressable 
                        key={i} 
                        style={styles.control}
                        onPress={() => setActive(tabItem)}
                    >
                        <Text style={{
                            ...styles.controlText,
                            fontWeight: active && active.name === tabItem.name ? '600' : '300'
                        }}>
                            {tabItem.name}
                        </Text>
                    </Pressable>
                )}
            </View>
            {active && (
                <View style={styles.tab}>
                    {active.component}
                </View>
            )}
        </View>
    )
}