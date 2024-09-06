import {createRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootParamList} from '../types/Navigation';

export const navigationRef = createRef<NavigationContainerRef<RootParamList>>();

export const navigate = (name: keyof RootParamList, params?: any) => {
  navigationRef.current?.navigate(name, params);
};
