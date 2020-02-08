import React, { Component } from 'react';
import {Button} from 'react-native';
import RegisterComponent from '../component/register';
import Layout from './Layout';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.props.navigation.setOptions({
      title: 'Sign up',
    });
  }

  render() {
    return (
      <>
        <Layout><RegisterComponent navigation={this.props.navigation} route={this.props.route} /></Layout>
      </>
    )
  }
}