import React from 'react';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header
          centerComponent={{ text: '101 Challenge', style: { color: '#fff' } }}
        />
    );
  }
}
