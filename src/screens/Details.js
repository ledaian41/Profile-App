import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React, { Component } from "react";
import { Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import BottomTab from "../components/BottomTab";
import { Ionicons } from '@expo/vector-icons';

const dummyUser = require('../testData/dummyUser');
const fullWidth = Dimensions.get('window').width;

const BackIcon = () => {
  return (
    <TouchableOpacity style={ styles.button }>
      <Ionicons name='ios-arrow-back' style={ styles.icon }/>
    </TouchableOpacity>
  )
};

const MenuIcon = () => {
  return (
    <TouchableOpacity style={ styles.button }>
      <Ionicons name='ios-menu' style={ styles.icon }/>
    </TouchableOpacity>
  )
};

export default class Details extends Component {
  static navigationOptions = ( {navigation} ) => {
    return {
      headerRight: <MenuIcon />,
      headerBackImage: <BackIcon />,
    }
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', '');
    const foundImages = dummyUser.photos.data.filter(item => item.id === itemId);

    const imageSrc = { uri: foundImages[0].value };

    return (
      <SafeAreaView style={ styles.container }>
        <View style={ styles.body }>
          <AutoHeightImage source={ imageSrc } width={ fullWidth }/>
        </View>
        <View style={ styles.footer }>
          <BottomTab />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    fontSize: 30,
  },
  button: {
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    width: 30
  },
  body: {
    flex: 0.94,
  },
  footer: {
    flex: 0.06
  },

});