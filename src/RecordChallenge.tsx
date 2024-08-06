import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from './AppView';

export default function RecordChanllengeScreen() {
  return (
    <AppView>
      <WebView
        source={{
          uri: 'https://google.com',
        }}
        style={RecordChanllengeScreenStyles.webview}
      />
    </AppView>
  );
}

const RecordChanllengeScreenStyles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
