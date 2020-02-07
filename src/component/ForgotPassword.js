import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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

    //--------------------------------Redirect this screen to other screen-----------------------------------------
    redirectScreen = (screenName) => {
        this.props.navigation.navigate(screenName);
    }

    //---------------------------------Get phone is filled in input and check---------------------------------------
    postPhone() {
        if (this.checkPhone(this.state.phone)) {
            // post data on server
            //code

            //redirect to VerifyPhone Screen
            this.redirectScreen('VerifyPhone');
        }
    }

    render() {

        //-----------------------------------------Component to show error-------------------------------------------
        const errorComponent = (
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'red', justifyContent: 'center' }}>{this.state.error}</Text>
            </View>
        );

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
                    <View style={{ overflow: 'hidden', width: 350, height: 50, backgroundColor: 'white', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                        <InputAN onChangeInput={this.changePhone} placeholder='Phone' fontSize={StylesApp.fontSize} bgColor={'white'} />
                    </View>

                    {/* Show error */}
                    {this.state.isError ? errorComponent : null}
                    {/* Show error */}

                    <View style={styles.buttonForm}>
                        <ButtonTextAN onPress={this.postPhone} title={'Next'} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50} />
                    </View>
                    <View style={styles.SignupAndFgPass}>
                        <ButtonTextAN onPress={() => this.redirectScreen('Signup')} title={'Sign up'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                        <ButtonTextAN onPress={() => this.redirectScreen('Login')} title={'Login'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
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
