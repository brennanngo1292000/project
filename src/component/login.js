import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import InputAN from './InputAN';
import StylesApp from './StylesApp';
import ButtonTextAN from './ButtonTextAN';

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelect: false,
        }
        this.redirectScreen = this.redirectScreen.bind(this);
    }

    redirectScreen = (screenName) => {
        console.log(this.props.navigation);
    }

    render() {
        return (
            <View style={styles.loginView}>
                <View>
                    <View style={styles.buttonSelect}>
                        <Text style={{ color: StylesApp.text, fontSize: StylesApp.fontSize, }}>Country</Text>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }} onPress={() => {
                            this.setState({
                                isSelect: true
                            })
                        }}>
                            <Text style={{ color: StylesApp.text, fontSize: StylesApp.fontSize }}>
                                VietNam (+84)
                            </Text>
                            <Icon name='chevron-right' style={{ marginLeft: 20, fontSize: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <InputAN placeholder='Phone' fontSize={StylesApp.fontSize} bgColor={'white'} />
                    </View>
                    <View style={styles.inputPassword}>
                        <InputAN placeholder='Password' hasIcon={true} fontSize={StylesApp.fontSize} bgColor={'white'} />
                    </View>
                    <View style={styles.buttonForm}>
                        <ButtonTextAN title={'Sign in'} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50} />
                    </View>
                    <View style={styles.SignupAndFgPass}>
                        <ButtonTextAN onPress={this.redirectScreen} title={'Signup'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                        <ButtonTextAN onPress={this.redirectScreen} title={'Forgot password'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    loginView: {
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        borderColor: StylesApp.text,
    },

    buttonSelect: {
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: 350,
        height: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    inputPassword: {
        overflow: 'hidden',
        width: 350, height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: StylesApp.text
    },

    buttonForm: {
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },

    SignupAndFgPass: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
