import React, { Component } from 'react'
import RegisterComponent from '../component/register';
import Layout from './Layout';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Layout><RegisterComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}