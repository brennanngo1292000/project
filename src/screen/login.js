import React, { Component } from 'react'
import LoginComponent from "../component/login";
import Layout from './Layout';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Layout><LoginComponent navigation={this.props.navigation} /></Layout>
      </>
    )
  }
}