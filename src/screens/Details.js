import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
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