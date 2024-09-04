import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AccountStack} from './AccountStack';
import {FeedScreen} from '../screens/feed/FeedScreen';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{title: 'Feed'}}
        />
        <Tab.Screen
          name="AccountStack"
          component={AccountStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
