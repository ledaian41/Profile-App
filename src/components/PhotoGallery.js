import React, { Component } from "react";
import { FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class PhotoGallery extends Component {
  getImage(src) {
    return {
      uri: src
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.images}
        numColumns={2}
        renderItem={({item}) =>
          <TouchableOpacity>
            <Image
              source={this.getImage(item.value)}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const imgWidth = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
  image: {
    margin: 2,
    height: 150,
    width: imgWidth
  }
});