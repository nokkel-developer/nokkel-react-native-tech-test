import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EmailScreen} from '../screens/account/EmailScreen';
import {NameScreen} from '../screens/account/NameScreen';
import {AgeScreen} from '../screens/account/AgeScreen';
import {UserScreen} from '../screens/account/UserScreen';

export type AccountStackParamList = {
  EmailScreen: undefined;
  NameScreen: undefined;
  AgeScreen: undefined;
  UserScreen: undefined;
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{title: 'Email'}}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{title: 'Name'}}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{title: 'Age'}}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{title: 'User'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
