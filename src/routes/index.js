import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EntregasRoutes from './Entregas';

import SignIn from '~/pages/SignIn';
import MeuPerfil from '~/pages/MeuPerfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes({ SignedIn }) {
  return (
    <NavigationContainer>
      {!SignedIn ? (
        <>
          <Stack.Navigator initialRouteName="SignIn" headerMode="none">
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Tab.Navigator
            initialRouteName="Entregas"
            screenOptions={{
              screens: {
                Entregas: 'Entregas',
                MeuPerfil: 'MeuPerfil',
              },
            }}
            tabBarOptions={{
              keyboardHidesTabBar: true,
              activeTintColor: '#7159c1',
              inactiveTintColor: '#999999',
              style: {
                borderTopColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
              },
            }}
          >
            <Tab.Screen
              name="Entregas"
              component={EntregasRoutes}
              options={{
                tabBarLabel: 'Entregas',
                unmountOnBlur: true,
                tabBarIcon: ({ color }) => (
                  <Icon name="reorder-horizontal" size={20} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="MeuPerfil"
              component={MeuPerfil}
              options={{
                tabBarLabel: 'Meu Perfil',
                tabBarIcon: ({ color }) => (
                  <Icon name="account-circle" size={20} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

Routes.propTypes = {
  SignedIn: PropTypes.bool,
  color: PropTypes.string,
};

Routes.defaultProps = {
  SignedIn: false,
  color: '',
};
