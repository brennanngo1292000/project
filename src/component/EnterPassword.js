import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ButtonTextAN from "./ButtonTextAN";
import InputAN from "./InputAN";
import StylesApp from "./StylesApp";

export default class EnterPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            isError: false,
            error: null,
        }
        this.textChange = this.textChange.bind(this);
        this.createPassword = this.createPassword.bind(this);
    }
    checkPassword = (input) => {
        if (!input) {
            this.setState({
                isError: true,
                error: 'Password is empty, please enter password to next',
            })
            return false;
        }

        if (input.length < 6) {
            this.setState({
                isError: true,
                error: 'Password must contain at least six characters!',
            })
            return false;
        }

        let re = /[0-9]/;
        if (!re.test(input)) {
            this.setState({
                isError: true,
                error: 'Password must contain at (0-9)!',
            })
            return false;
        }

        re = /[a-z]/;
        if (!re.test(input)) {
            this.setState({
                isError: true,
                error: 'Password must contain at (a-z)!',
            })
            return false;
        }

        re = /[A-Z]/;
        if (!re.test(input)) {
            this.setState({
                isError: true,
                error: 'Password must contain at (A-Z)!',
            })
            return false;
        }

        this.setState({
            isError: false,
            error: null,
        })
        return true;
    }

    textChange = (text) => {
        this.setState({
            password: text,
        })
    }

    createPassword = () => {
        let result = this.checkPassword(this.state.password);
        if (result) {
            //Post data to table||database
            alert(this.state.password);
        }
    }

    render() {
        const errorComponent = (
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'red', justifyContent: 'center' }}>{this.state.error}</Text>
            </View>
        );

        return (
            <View style={styles.loginView}>
                <View style={{ flexDirection: "column", justifyContent: "center" }}>
                    <View style={styles.inputPassword}>
                        <InputAN onChangeInput={this.textChange} placeholder='Password' hasIcon={true} fontSize={StylesApp.fontSize} bgColor={'white'} />
                    </View>
                    {/* Show error */}
                    {this.state.isError ? errorComponent : null}
                    {/* Show error */}
                    <View style={styles.buttonForm}>
                        <ButtonTextAN title={'Next'} onPress={this.createPassword} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50} />
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
        borderColor: 'rgba(1,1,1,0.1)',
    },
    buttonForm: {
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    inputPassword: {
        overflow: 'hidden',
        width: 350,
        height: 50,
        borderRadius: 10,
        borderColor: StylesApp.text
    },
    SignupAndFgPass: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
