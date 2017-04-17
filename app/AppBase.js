/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

import { appStyle } from './theme';

export default class App extends Component {
  
  constructor(props) {
      super(props);
      this.updateNav = this.updateNav.bind(this);
  }

  updateNav() {
      console.log('nav');
      const {routes, route, navigator} = this.props;
      navigator.push(routes[1]);
  }

  render() {
    const {route} = this.props;
    return (
        <Container>
            <Header {...this.props} back />
            <Content style={appStyle.welcome}>
                <Button onPress={this.updateNav} success><Text>Success</Text></Button>
            </Content>
            <Footer />
        </Container>
    );
  }
}
