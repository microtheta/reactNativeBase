
import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class FooterComponent extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Footer>
          <FooterTab>
              <Button full light>
                  <Text>Footer</Text>
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}
