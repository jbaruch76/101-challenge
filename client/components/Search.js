import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import { fetchImages } from '../store';
import { connect } from 'react-redux';
import Header from './Header';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  render() {
    return (
      <View>
        <Header />
        <SearchBar
          onChangeText={text => this.setState({keyword: text})}
        />
        <Button
          title='Search'
          onPress={() => this.props.searchImages(this.state.keyword)}
        />
        {this.props.images.hits &&
        <View style={{maxHeight: '100%'}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>{this.props.images.hits.length + ' results'}</Text>
        <FlatList
          style={{paddingBottom: 20,}}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}}
          data={this.props.images.hits}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) =>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SingleImage', {item})}>
              <Image
                style={{width: item.previewWidth, height: item.previewHeight, paddingBottom: 10}}
                source={{uri: item.previewURL}}
              />
            </TouchableOpacity>
          }
        />
        </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchImages(keyword) {
      dispatch(fetchImages(keyword));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
