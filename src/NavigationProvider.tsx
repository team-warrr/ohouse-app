import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import LuckyAttendanceScreen from './LuckyAttendanceScreen';
import RecordChallengeScreen from './RecordChallenge';
import {navigationRef} from './navigation/RootNavigation';

const BottomTabs = createBottomTabNavigator();

const NavigationProvider = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabs.Navigator>
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
