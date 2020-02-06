//is writed by Anh Ngo on 02/06/2020. Thanks for read and use

//----------------------------------------------Note---------------------------------------------------------------------
//props = [bgHeader, title, quote]
//----------------------------------------------Note---------------------------------------------------------------------

import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet} from 'react-native'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state= {
        }
    }
    render() {
        return (
            <ImageBackground source={this.props.bgHeader} style = {styles.bgHeader}>
                <View>
                    <Text style = {styles.textLogo}>
                        {this.props.title? this.props.title: ''}
                    </Text>
                    <Text style = {styles.quote}>
                       {this.props.quote? this.props.quote: ''}
                    </Text>
                </View>
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    bgHeader: {
      width: '100%',
      height: '100%',
      justifyContent:'center',
      alignItems:'center',
    },
    textLogo: {
        color: 'rgb(0,139,176)',
        fontSize: 30,
        fontWeight:'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        paddingBottom:20,
        paddingTop:20,
        paddingRight:20,
        paddingLeft:20,
        borderRadius:20
    },
   quote: {
       textAlign:'center',
       color:'rgb(50,50,50)',
       fontWeight:'bold',
       fontSize:14,
   }
  })