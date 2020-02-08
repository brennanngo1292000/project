import React, { Component } from 'react'
import EnterPasswordComponent from "../component/EnterPassword";
import Layout from './Layout';

export default class EnterPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.props.navigation.setOptions({
      title: 'Enter password',
    });
  }

  render() {
    return (
      <>
        <Layout><EnterPasswordComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}