
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

import SideBar from './SideBar';

import {headerStyle} from '../theme';

export default class HeaderComponent extends Component {
  
  constructor(props) {
      super(props);
      this._onBack = this._onBack.bind(this);
  }

  _onBack() {
      const { navigator } = this.props;
      navigator.pop();
  }

  render() {
    const {route, navigator} = this.props;
    return (
        
          <View style={headerStyle.headerMain}>
            <View style={headerStyle.headerLeft}>
              { this.props.back ?
                <Button transparent style={headerStyle.headerIconBtn} onPress={this._onBack}>
                    <Icon name='ios-arrow-back-outline' style={headerStyle.headerIcon} />
                </Button> : null
              }
              <Button transparent  style={headerStyle.headerIconBtn} onPress={this.openDrawer}>
                  <Icon name='ios-menu' style={headerStyle.headerIcon} />
              </Button>
            </View>
            <View style={headerStyle.headerTitle}>
                <Text numberOfLines={1} style={headerStyle.headerTitleText}>{route.title}</Text>
            </View>
            <View style={headerStyle.headerRight}>
                <Button transparent  style={headerStyle.headerIconBtn}>
                    <Icon name='ios-log-out' style={headerStyle.headerIcon} />
                </Button>
            </View>
          </View>
        
    );
  }
}
