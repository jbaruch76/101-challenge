import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Search from './client/components/Search';
import Header from './client/components/Header';

import SingleImage from './client/components/SingleImage';

import store from './client/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const RootNavigator = StackNavigator({
  Main: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  SingleImage: {
    screen: SingleImage,
    navigationOptions: ({ navigation }) => ({
      title: 'SingleImage',
      header: <Header navigation={navigation} />
    })
  },
});
