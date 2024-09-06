import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export default function AppView({children}: PropsWithChildren) {
  return <View style={AppViewStyles.container}>{children}</View>;
}

const AppViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
