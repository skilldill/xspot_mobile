import React from 'react';

import { Tabs } from '../components';
import { MapScreen, SpotsListScreen } from '../screens';

export const Navigation = () => {
    return (
        <Tabs 
            tabs={[
                { component: <MapScreen />, name: 'Карта' },
                { component: <SpotsListScreen />, name: 'Список' }
            ]}
        />
    )
}