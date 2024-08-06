import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from './AppView';

export default function HomeScreen() {
  return (
    <AppView>
      <WebView
        source={{
          uri: 'https://google.com',
        }}
        style={HomeScreenStyles.webview}
      />
    </AppView>
  );
}

const HomeScreenStyles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
