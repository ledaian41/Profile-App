import React, { Component } from "react";
import {Dimensions, Image, StyleSheet, TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation'
import defaultImage from '../../assets/default-fallback-image.png';

// const defaultImage = require('../../assets/default-fallback-image.png');
const imgWidth = Dimensions.get('window').width / 2;

class Photo extends Component {
  moveToDetailScreen() {
    this.props.navigation.navigate('Details', {
      id: this.props.source.id
    });
  }

  render() {
    const src = { uri: this.props.source.value };
    return (
      <TouchableOpacity onPress={ this.moveToDetailScreen.bind(this) }>
        <Image
          source={src}
          style={styles.image}
          resizeMode="cover"
          defaultSource={defaultImage}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    margin: 2,
    height: 150,
    width: imgWidth
  }
});

export default withNavigation(Photo);