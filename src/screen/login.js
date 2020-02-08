import React, { Component } from 'react'
import LoginComponent from "../component/login";
import Layout from './Layout';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    
    this.props.navigation.setOptions({
      title: 'Login',
    });
  }

  render() {
    return (
      <>
        <Layout><LoginComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}