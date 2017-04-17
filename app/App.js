/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import AppBase from './AppBase';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentDidMount() {
    
  }
  render() {
    const routes = [
      { title: 'Hello', index: 0 },
      { title: 'Awesome Scene', index: 1 },
    ];
    return (
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump }
            renderScene={(route, navigator) =>
              route.index === 0 ?
                <AppBase routes={routes} route={route} navigator={navigator} />
              : route.index === 1 ? 
                <AppBase routes={routes} route={route} navigator={navigator} />
              :
              <Text> It's 404! </Text>
            }
          />
    );
  }
}
