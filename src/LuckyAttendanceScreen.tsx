import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from './AppView';

export default function LuckyAttendanceScreen() {
  return (
    <AppView>
      <WebView
        source={{
          uri: 'https://ohouse-web.vercel.app/attendance',
        }}
        style={LuckyAttendanceScreenStyles.webview}
      />
    </AppView>
  );
}

const LuckyAttendanceScreenStyles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
