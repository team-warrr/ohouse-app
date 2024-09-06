import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from '../components/AppView';

export default function RecordChallengeScreen() {
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
