/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './app/store';
import ContactsView from './components/contacts/ContactsView';
import ImageListView from './components/images/ImagesListView';
import SearchView from './components/search/SearchView';
import HomeView from './components/home/HomeView';
import {
  StyleSheet,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="ContactsList"
            component={ContactsView}
            options={{title: 'Contacts'}}
          />
          <Stack.Screen
            name="ImageList"
            component={ImageListView}
            options={{title: 'Image List'}}
          />
          <Stack.Screen
            name="Search"
            component={SearchView}
            options={{title: 'Search'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
