import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, {
  initialRouteName: 'Home',
  // defaultNavigationOptions: {
  //   header: null
  // }
});

export default createAppContainer(AppNavigator);