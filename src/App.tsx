import React, {useCallback, useEffect} from 'react';
import {setupURLPolyfill} from 'react-native-url-polyfill';
import {Alert, Linking} from 'react-native';
import NavigationProvider from './navigation/NavigationProvider';
import {RootParamList} from './types/Navigation';
import {urlMap} from './constants/urlMap';
import {navigate} from './navigation/RootNavigation';

setupURLPolyfill();

const App = () => {
  const deepLink = useCallback((url: string) => {
    if (url) {
      try {
        const urlObject = new URL(url);
        let route: string | null = null;

        if (urlObject.protocol === 'https:') {
          route = urlObject.pathname.split('/')[1];
        } else if (urlObject.protocol === 'ohouseapp:') {
          route = url.split('://')[1];
        }

        if (route) {
          const routeName = urlMap[route];
          if (routeName) {
            navigate(routeName as keyof RootParamList);
          } else {
            Alert.alert('urlMap에서 경로를 찾을 수 없습니다:', route);
          }
        } else {
          Alert.alert('경로가 null이거나 navigationRef를 사용할 수 없습니다');
        }
      } catch (error) {
        Alert.alert(
          '링크 처리 오류',
          '링크를 처리하는 도중 오류가 발생했습니다.',
        );
      }
    }
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        deepLink(url);
      }
    });

    const urlListener = Linking.addEventListener('url', ({url}) => {
      if (url) {
        deepLink(url);
      }
    });

    return () => {
      urlListener.remove();
    };
  }, [deepLink]);

  return <NavigationProvider />;
};

export default App;
