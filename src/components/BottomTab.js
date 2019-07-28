import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <AntDesign name='home' style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name='plussquareo' style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name='user' style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
  }
});