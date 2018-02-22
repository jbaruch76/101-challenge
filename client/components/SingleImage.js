import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default class SingleImage extends React.Component {

  render() {
    const item = this.props.navigation.state.params.item;
    return (
    <View style={{flex: 1}}>
      <Card
        imageWrapperStyle={{justifyContent: 'center',
        alignItems: 'center',}}
        style={{justifyContent: 'center',
        alignItems: 'center',}}
        image={{uri: item.previewURL}}
        imageProps={{resizeMode: 'contain'}}
        imageStyle={{width: item.previewWidth, height: item.previewHeight}}>
      <Text style={{marginBottom: 10}}>
        Uploaded By: {item.user}
        {'\n'}
        Image Tags: {item.tags}
        {'\n'}
        Resolution: {item.imageWidth} x {item.imageHeight}
      </Text>
    </Card>
    </View>

    )
  }
}
