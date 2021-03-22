import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigator} from './BottomNavigator';

export type AppNavigatorParams = {
  Home: undefined;
};

export const AppNavigator = () => {
  const Stack = createStackNavigator<AppNavigatorParams>();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
