import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DemoScreen} from '../DemoScreen';
import Icon from 'react-native-vector-icons/Entypo';

export type BottomNavigatorParams = {
  Home: undefined;
  Info: undefined;
  Contacts: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomNavigatorParams>();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={DemoScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={DemoScreen}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({color, size}) => (
            <Icon name={'info'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={DemoScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <Icon name={'phone'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DemoScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name={'sound-mix'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
