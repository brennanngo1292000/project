//is writed by Anh Ngo on 02/06/2020. Thanks for read and use

//----------------------------------------------Note---------------------------------------------------------------------
//props = [fontSize, color]
//Events = [onCheck]
//----------------------------------------------Note---------------------------------------------------------------------

import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Fontisto";

export default class CheckBoxAN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCheck: false,
        }

        this.isCheck = this.isCheck.bind(this);
    }

    isCheck = async () => {
        await this.setState({
            isCheck: !this.state.isCheck,
        })
        if (this.props.onCheck) this.props.onCheck(this.state.isCheck);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.isCheck} style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.state.isCheck ?
                    <Icon name="checkbox-active" color={this.props.color ? this.props.color : 'black'} size={this.props.fontSize ? this.props.fontSize : 14} /> :
                    <Icon name="checkbox-passive" color={this.props.color ? this.props.color : 'black'} size={this.props.fontSize ? this.props.fontSize : 14} />}
            </TouchableOpacity>
        )
    }
}
