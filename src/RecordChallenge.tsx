import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from './AppView';

export default function RecordChanllengeScreen() {
  return (
    <AppView>
      <WebView
        source={{
          uri: 'https://ohouse-web.vercel.app/record-challenge',
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
