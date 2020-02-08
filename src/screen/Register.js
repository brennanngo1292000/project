import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native';
import Header from "../component/SliderAN";
import RegisterComponent from '../component/register';
import bgApp from "./images/bgApp.png";
import bgHeader from "./images/bgHeader.jpg";
import StylesApp from '../component/StylesApp';
import styleLayout from './styleLayout';

export default class Register extends Component {
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
          <RegisterComponent navigation={this.props.navigation} />
        </View>
      </ImageBackground>
    )
  }
}