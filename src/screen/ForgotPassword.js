import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native';
import Header from "../component/SliderAN";
import bgApp from "./images/bgApp.png";
import bgHeader from "./images/bgHeader.jpg";
import StylesApp from "../component/StylesApp";
import ForgotPasswordComponent from '../component/ForgotPassword';
import styleLayout from './styleLayout';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { ImageBgApp, styleHeader, styleBody } = styleLayout;

    return (
      <ImageBackground source={bgApp} style={ImageBgApp}>
        <View style={styleHeader}>
          <Header bgHeader={bgHeader} title={StylesApp.logoText} quote={StylesApp.quote} />
        </View>
        <View style={styleBody}>
          <ForgotPasswordComponent navigation={this.props.navigation} />
        </View>
      </ImageBackground>
    )
  }
}

