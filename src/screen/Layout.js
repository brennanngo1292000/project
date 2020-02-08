import React, { Component } from 'react'
import { View, ImageBackground, ActivityIndicator } from 'react-native';
import Header from "../component/SliderAN";
import bgApp from "./images/bgApp.png";
import bgHeader from "./images/bgHeader.jpg";
import StylesApp from "../component/StylesApp";
import styleLayout from './styleLayout';

class Loader extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <ActivityIndicator color='black' size={20} />
      </View>
    )
  }
}

class LayoutScreen extends Component {
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
          {this.props.children}
        </View>
      </ImageBackground>
    )
  }
}

export default class LayoutScreenHasLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 3000)
  }

  render() {
    return (
      <>
        {this.state.isLoading ? <Loader /> : <LayoutScreen>{this.props.children}</LayoutScreen>}
      </>
    )
  }
}





