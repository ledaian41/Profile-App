import React, { Component } from "react";
import { FlatList } from 'react-native';
import Photo from './Photo';

export default class PhotoGallery extends Component {
  render() {
    return (
      <FlatList
        data={ this.props.images }
        numColumns={ 2 }
        renderItem={ ({ item }) => <Photo source={ item } /> }
        keyExtractor={ (item, index) => index.toString() }
      />
    )
  }
}