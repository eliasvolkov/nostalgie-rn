import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Theme, COLORS} from './constants';
import {AppNavigator} from './navigator/AppNavigator';

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor={COLORS.TRANSPARENT}
          barStyle="light-content"
        />
        <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
