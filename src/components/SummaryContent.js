import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class SummaryContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{ this.props.number }</Text>
        <Text style={styles.title}>{ this.props.title }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(92,101,98,0.71)'
  }
});