import React, { Component } from 'react'
import ForgotPasswordComponent from '../component/ForgotPassword';
import Layout from './Layout';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.props.navigation.setOptions({
      title: 'Forgot password',
    });
  }

  render() {
    return (
      <>
        <Layout><ForgotPasswordComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}

