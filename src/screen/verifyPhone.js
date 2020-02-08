import React, { Component } from 'react'
import VerifyPhoneComponent from '../component/verifyPhone';
import Layout from './Layout';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    
    this.props.navigation.setOptions({
      title: 'Verify phone',
    });
  }

  render() {
    return (
      <>
        <Layout><VerifyPhoneComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}
