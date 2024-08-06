import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen';

const BottomTabs = createBottomTabNavigator();

export default function NavigationProvider() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Home" component={HomeScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
