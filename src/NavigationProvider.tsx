import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LuckyAttendanceScreen from './LuckyAttendanceScreen';
import RecordChanllengeScreen from './RecordChallenge';

const BottomTabs = createBottomTabNavigator();

export default function NavigationProvider() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="홈" component={HomeScreen} />
        <BottomTabs.Screen name="행운출첵" component={LuckyAttendanceScreen} />
        <BottomTabs.Screen
          name="기록챌린지"
          component={RecordChanllengeScreen}
        />
        <BottomTabs.Screen name="로그인" component={LoginScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
