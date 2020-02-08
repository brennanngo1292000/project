//is writed by Anh Ngo on 02/06/2020. Thanks for read and use

//----------------------------------------------Note---------------------------------------------------------------------
//props = [bgColor, width, height,fontSize, color]
//Events = [onPress, onPressOut, onPressIn]
//----------------------------------------------Note---------------------------------------------------------------------


import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class ButtonTextAN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPress: false,
        }

        this.styles = StyleSheet.create({
            bgButtonText: {
                backgroundColor: this.props.bgColor ? this.props.bgColor : null,
                width: Number(this.props.width) ? Number(this.props.width) : null,
                height: Number(this.props.height) ? Number(this.props.height) : null,
                justifyContent: 'center',
                alignItems: 'center',
            },
            pressed: {
                color: this.props.color ? this.props.color : '#0000FF',
                fontSize: Number(this.props.fontSize) ? Number(this.props.fontSize) : 14,
            },
            notPress: {
                color: this.props.color ? this.props.color : '#00008B',
                fontSize: Number(this.props.fontSize) ? Number(this.props.fontSize) : 14,
            }
        })
    }
    onPressIn = () => {
        this.setState({
            isPress: true
        })

        if (this.props.onPressIn) this.props.onPressIn();
    }
    onPressOut = () => {
        this.setState({
            isPress: false
        })

        if (this.props.onPressOut) this.props.onPressOut();
    }

    onPress = () => {
        if (this.props.onPress) this.props.onPress();
    }

    render() {
        const { bgButtonText, pressed, notPress } = this.styles;

        return (
            <TouchableOpacity onPressOut={this.onPressOut} onPressIn={this.onPressIn} onPress={this.onPress} style={bgButtonText}>
                <Text style={this.state.isPress ? pressed : notPress}>
                    {this.props.title ? this.props.title : 'Button'}
                </Text>
            </TouchableOpacity>
        )
    }
}