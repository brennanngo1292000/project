//is writed by Anh Ngo on 02/06/2020. Thanks for read and use

//----------------------------------------------Note---------------------------------------------------------------------
//props = [width, height, fontSize, placeholder, hasIcon]
//Events = [onChangeInput]
//----------------------------------------------Note---------------------------------------------------------------------

import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default class InputAN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNotShow: false,
            password: null,
        }
        this.styles = StyleSheet.create({
            passwordBg: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'space-between',
                backgroundColor: this.props.bgColor ? this.props.bgColor : null,
                width: Number(this.props.width) ? Number(this.props.width) : 350,
                height: Number(this.props.height) ? Number(this.props.height) : 50,
            },
            inputPassword: {
                fontSize: Number(this.props.fontSize) ? Number(this.props.fontSize) : 14,
                width: '80%',
                height: Number(this.props.height) ? Number(this.props.height) : 50,
                paddingLeft: 20,
            },
            iconBg: {
                marginRight: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: '10%',
                height: Number(this.props.height) ? Number(this.props.height) : 50,
            }
        }
        )

        this.onChangeInput = this.onChangeInput.bind(this);
        this.isShowValue = this.isShowValue.bind(this);
    }

    onChangeInput = (value) => {
        this.setState({
            password: value
        })

        if (this.props.onChangeInput) this.props.onChangeInput(value);
    }

    isShowValue = () => {
        this.setState({
            isNotShow: !this.state.isNotShow
        })
    }

    render() {

        const iconEye = (
            <TouchableOpacity style={this.styles.iconBg} onPress={this.isShowValue}>
                {
                    this.state.isNotShow ? <Icon name="ios-eye" color="black" size={20} /> : <Icon name="ios-eye-off" color="black" size={20} />
                }
            </TouchableOpacity>
        );

        const inputPassword = (
            <TextInput
                style={this.styles.inputPassword} secureTextEntry={this.state.isNotShow}
                password={true}
                placeholderTextColor={this.props.placeholderColor ? this.props.placeholderColor : 'rgba(1,1,1,0.5)'}
                placeholder={this.props.placeholder ? this.props.placeholder : ''}
                onChangeText={this.onChangeInput} />
        )

        return (
            <View style={this.styles.passwordBg}>
                {inputPassword}
                {this.props.hasIcon ? iconEye : null}
            </View>
        )
    }
}