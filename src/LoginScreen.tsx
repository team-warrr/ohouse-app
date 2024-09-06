import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import AppView from './AppView';

export default function LoginScreen() {
  return (
    <AppView>
      <WebView
        source={{
          uri: 'https://ohouse-web.vercel.app/login',
        }}
        style={LoginScreenStyles.webview}
      />
    </AppView>
  );
}

const LoginScreenStyles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
