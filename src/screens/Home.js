import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Introduction from '../components/Introduction';
import SummaryContent from '../components/SummaryContent';
import PhotoGallery from '../components/PhotoGallery';
import BottomTab from '../components/BottomTab';

const dummyUser = require('../testData/dummyUser');

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <View style={ styles.intro }>
          <Introduction user={ dummyUser }/>
        </View>
        <View style={ styles.summary }>
          <SummaryContent number={dummyUser.photos.total} title='Photos' />
          <SummaryContent number={dummyUser.followers} title='Followers' />
          <SummaryContent number={dummyUser.following} title='Following' />
        </View>
        <View style={ styles.body }>
          <PhotoGallery images={dummyUser.photos.data} />
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
    flex: 1,
  },
  intro: {
    flex: 0.14,
    justifyContent: 'center',
  },
  summary: {
    flex: 0.07,
    flexDirection: 'row'
  },
  body: {
    flex: 0.73,
    marginHorizontal: 4
  },
  footer: {
    flex: 0.06
  }
});