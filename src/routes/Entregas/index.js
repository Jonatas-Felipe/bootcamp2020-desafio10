import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EncomendaRoutes from '~/routes/Encomenda';

import Entregas from '~/pages/Entregas';

const Stack = createStackNavigator();

export default function EntregasRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Entregas" component={Entregas} />
      <Stack.Screen name="Encomenda" component={EncomendaRoutes} />
    </Stack.Navigator>
  );
}
