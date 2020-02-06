import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from "../component/SliderAN";
import LoginComponent from "../component/EnterPassword";
import bgHeader from "./images/bgHeader.jpg";
import bgApp from "./images/bgApp.png";
import StylesApp from "../component/StylesApp";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <ImageBackground source={bgApp} style={styles.ImageBgApp}>
        <View style={styles.styleHeader}>
          <Header bgHeader={bgHeader} title={StylesApp.logoText} quote={StylesApp.quote} />
        </View>
        <View style={styles.styleBody}>
          < LoginComponent />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  ImageBgApp: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleHeader: {
    height: '40%',
    width: '100%'
  },
  styleBody: {
    height: '60%',
    width: '100%'
  }
})

