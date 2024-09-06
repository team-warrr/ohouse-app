import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LuckyAttendanceScreen from '../screens/LuckyAttendanceScreen';
import RecordChallengeScreen from '../screens/RecordChallengeScreen';
import {navigationRef} from './RootNavigation';

const BottomTabs = createBottomTabNavigator();

const NavigationProvider = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabs.Navigator screenOptions={{headerShown: false}}>
        <BottomTabs.Screen name="홈" component={HomeScreen} />
        <BottomTabs.Screen name="행운출첵" component={LuckyAttendanceScreen} />
        <BottomTabs.Screen
          name="기록챌린지"
          component={RecordChallengeScreen}
        />
        <BottomTabs.Screen name="로그인" component={LoginScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
