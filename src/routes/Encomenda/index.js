import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ReturnButton from '~/components/ReturnButton';

import DetalhesEncomendas from '~/pages/DetalhesEncomendas';
import InformarProblema from '~/pages/DetalhesEncomendas/InformarProblema';
import VisualizarProblemas from '~/pages/DetalhesEncomendas/VisualizarProblemas';
import ConfirmarEntrega from '~/pages/DetalhesEncomendas/ConfirmarEntrega';
import Notificacoes from '~/pages/Notificacoes';

const Stack = createStackNavigator();

export default function EncomendasRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="DetalhesEncomenda"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="DetalhesEncomenda"
        component={DetalhesEncomendas}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: () => <ReturnButton />,
        }}
      />
      <Stack.Screen
        name="InformarProblema"
        component={InformarProblema}
        options={{
          title: 'Informar problema',
          headerLeft: () => <ReturnButton />,
        }}
      />
      <Stack.Screen
        name="VisualizarProblemas"
        component={VisualizarProblemas}
        options={{
          title: 'Visualizar problemas',
          headerLeft: () => <ReturnButton />,
        }}
      />
      <Stack.Screen
        name="ConfirmarEntrega"
        component={ConfirmarEntrega}
        options={{
          title: 'Confirmar entrega',
          headerLeft: () => <ReturnButton />,
        }}
      />
      <Stack.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          title: 'Notificacoes',
          headerLeft: () => <ReturnButton />,
        }}
      />
    </Stack.Navigator>
  );
}
