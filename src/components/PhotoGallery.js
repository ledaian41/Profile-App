import React, { Component } from "react";
import { FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export default class PhotoGallery extends Component {
  render() {
    return (
      <FlatList
        data={this.props.images}
        numColumns={2}
        renderItem={({item}) =>(
          <Photo source={item.value} />
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const Photo = (props) => {
  const src = { uri: props.source };
  return (
    <TouchableOpacity>
      <Image
        source={src}
        style={styles.image}
        resizeMode="cover"
        defaultSource={defaultImage}
      />
    </TouchableOpacity>
  )
};

const defaultImage = require('../../assets/default-fallback-image.png');
const imgWidth = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
  image: {
    margin: 2,
    height: 150,
    width: imgWidth
  }
});