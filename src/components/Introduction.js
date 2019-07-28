import React, { Component } from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Feather } from '@expo/vector-icons';

export default class Introduction extends Component {
  render() {
    const avatar = {
      uri: this.props.user.avatar
    };
    return (
      <View style={[ styles.container, styles.row ]}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatarImage}
            resizeMode="cover"
            source={avatar}/>
        </View>
        <View style={[styles.profile ,styles.column]}>
          <View>
            <Text style={ styles.name }>{this.props.user.name}</Text>
            <Text style={ styles.job }>{this.props.user.job}</Text>
          </View>
          <View style={[styles.row]}>
            <TouchableOpacity style={[styles.button, styles.buttonFollow]}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSend]}>
              <Feather name='send' color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  avatar: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  check: {
    flex: 1,
    backgroundColor: 'green'
  },
  profile: {
    flex: 0.6,
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  job: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(92,101,98,0.71)'
  },
  button: {
    justifyContent: 'center',
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 20
  },
  buttonFollow: {
    paddingHorizontal: 25,
    backgroundColor: FOLLOW_COLOR
  },
  buttonSend: {
    paddingHorizontal: 20,
    marginStart: 10,
    backgroundColor: SEND_MESSAGE_COLOR
  },
  buttonText: {
    color: 'white',
  }
});