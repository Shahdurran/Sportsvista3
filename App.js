import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStackNavigation from './DrawerNavigation/AuthenticationStackNavigation';

const App = () => {
  return (
      <NavigationContainer>
        <AuthenticationStackNavigation />
      </NavigationContainer>
  );
};

export default App;
