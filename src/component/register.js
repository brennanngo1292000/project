import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import StylesApp from './StylesApp';
import Icon from "react-native-vector-icons/FontAwesome5";
import InputAN from './InputAN';
import CheckBoxAN from './CheckBoxAN';
import ButtonTextAN from './ButtonTextAN';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: null,
            isError: false,
            error: null,
            isCheck: false,
        }
        this.changeCountry = this.changeCountry.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.postPhone = this.postPhone.bind(this);
        this.redirectScreen = this.redirectScreen.bind(this);
    }

    //----------------------------------------Function check phone is filled by user---------------------------------
    checkPhone = (input) => {
        if (!input) {
            this.setState({
                isError: true,
                error: 'Enter Phone',
            })
            return false;
        }

        let r = /^\d{10}$/
        if (!input.match(r)) {
            this.setState({
                isError: true,
                error: 'Phone is not validation',
            })
            return false;
        }

        this.setState({
            isError: false,
            error: null
        })
        return true;
    }

    //----------------------------------------Check, user had been checked box---------------------------------------
    isAccepted = (value) => {
        this.setState({
            isCheck: value,
        })
    }

    //-------------------------------------Save value from code country input---------------------------------------
    changeCountry = (text) => {
        this.setState({
            country: text
        })
    }

    //--------------------------------Save value from phone input to state----------------------------------------
    changePhone = (text) => {
        this.setState({
            phone: text
        })
    }

    //--------------------------------Redirect this screen to other screen with param which is object-----------------------------------------
    redirectScreen = (screenName, param = {}) => {
        this.props.navigation.navigate(screenName, param);
    }

    //---------------------------------Get phone is filled in input and check---------------------------------------
    postPhone() {
        if (!this.state.isCheck) {
            Alert.alert('You have to accepted before signup');
        }

        if (this.checkPhone(this.state.phone) && this.state.isCheck) {
            // post data on server
            //code

            //redirect to VerifyPhone Screen
            this.redirectScreen('VerifyPhone', { 'phone': this.state.phone });
        }
    }

    render() {
        const { registerView, buttonSelect, buttonForm, SignupAndFgPass } = styles;

        //-----------------------------------------Component to show error-------------------------------------------
        const errorComponent = (
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'red', justifyContent: 'center' }}>{this.state.error}</Text>
            </View>
        );

        return (
            <View style={registerView}>
                <View>
                    <View style={buttonSelect}>
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
                    <View style={{ overflow: 'hidden', width: 350, height: 50, backgroundColor: 'white', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                        <InputAN onChangeInput={this.changePhone} placeholder='Phone' fontSize={StylesApp.fontSize} bgColor={'white'} />
                    </View>

                    {/* Show error */}
                    {this.state.isError ? errorComponent : null}
                    {/* Show error */}

                    <View style={buttonForm}>
                        <ButtonTextAN onPress={this.postPhone} title={'Next'} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50} />
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItem: 'center' }}>
                        <CheckBoxAN onCheck={this.isAccepted} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                        <Text style={{ color: StylesApp.text, fontSize: StylesApp.fontSize }}> Toi chap nhan </Text>
                        <TouchableOpacity>
                            <Text style={{ color: StylesApp.button, textDecorationLine: 'underline', fontSize: StylesApp.fontSize }}>Chinh sach, dieu khoan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={SignupAndFgPass}>
                        <ButtonTextAN onPress={() => this.redirectScreen('Login')} title={'Login'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                        <ButtonTextAN onPress={() => this.redirectScreen('VerifyPhone')} title={'Forgot password'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    registerView: {
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 5,
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
