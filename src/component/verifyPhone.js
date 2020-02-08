import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import InputAN from './InputAN';
import StylesApp from './StylesApp';
import ButtonTextAN from './ButtonTextAN';

export default class ConfirmPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            isError: false,
            error: null,
            isSendCodeAgain: false,
            time: 30,
            timeRun: null,
        }
        this.changeCode = this.changeCode.bind(this);
        this.confirmCode = this.confirmCode.bind(this);
        this.redirectScreen = this.redirectScreen.bind(this);
    }

    //-------------------------------------------Save code on state------------------------------------------------
    changeCode = (value) => {
        this.setState({
            code: value,
        })
    }
    //----------------------------------method check code from input in state--------------------------------------
    checkCode = (input) => {
        if (!input) {
            this.setState({
                isError: true,
                error: 'Enter code',
            })
            return false;
        }
        if (input != this.getCodefromData()) {
            this.setState({
                isError: true,
                error: 'Code is not validation',
            })
            return false;
        }
        this.setState({
            isError: false,
            error: null,
        })
        return true;
    }

    //-----------------------------------------faker get code to check-----------------------------------------------
    getCodefromData = () => {
        return 123456;
    }

    //------------------------------------------------submit to checkcode--------------------------------------------
    confirmCode = () => {
        if (this.checkCode(this.state.code)) {
            //redirect to EnterPassword Screen
            this.redirectScreen('EnterPassword');
        }
    }

    //--------------------------------Redirect this screen to other screen with param which is object-----------------------------------------
    redirectScreen = (screenName, param = {}) => {
        this.props.navigation.navigate(screenName, param);
    }

    //--------------------------------Send code again if user pressed again button------------------------------------
    sendCodeAgain = () => {
        //call sever to send code 
        //code

        if (this.state.timeRun) {
            return;
        }

        this.state.timeRun = setInterval(() => {
            this.setState({
                isSendCodeAgain: true,
                time: this.state.time - 1
            })
        }, 1000);
    }

    //----------------------------------------determine the time to stop timeRun------------------------------------
    componentDidUpdate() {
        if (this.state.time == 1) {
            clearInterval(this.state.timeRun);
            this.setState({
                isSendCodeAgain: false,
                time: 30,
                timeRun: null,
            })
        }
    }

    //-----If user pressed again button to send code while redirect to other screen. This time, must stop timeRun------
    componentWillUnmount() {
        clearInterval(this.state.timeRun);
    }

    render() {
        const { ConfirmPhoneView, buttonForm, SignupAndFgPass } = styles;

        //-----------------------------------------Component to show error-------------------------------------------
        const errorComponent = (
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'red', justifyContent: 'center' }}>{this.state.error}</Text>
            </View>
        );
        return (
            <View style={ConfirmPhoneView}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', color: StylesApp.text, fontSize: StylesApp.fontSize }}>Code has been sent to phone number</Text>
                    <Text style={{ textAlign: 'center', color: StylesApp.text, fontSize: StylesApp.fontSize }}> {this.props.route.params.phone} {this.state.isSendCodeAgain ? ' (' + this.state.time + ') ' : null}</Text>
                </View>
                <View>
                    <View style={{ width: 350, height: 50, borderRadius: 10, overflow: 'hidden', backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                        <InputAN placeholder={'Code'} fontSize={StylesApp.fontSize} bgColor={'white'} onChangeInput={this.changeCode} width={300} />
                        <ButtonTextAN title={'again'} onPress={this.sendCodeAgain} />
                    </View>

                    {/* Show error */}
                    {this.state.isError ? errorComponent : null}
                    {/* Show error */}

                    <View style={buttonForm}>
                        <ButtonTextAN title={'Next'} onPress={this.confirmCode} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50} />
                    </View>
                    <View style={SignupAndFgPass}>
                        <ButtonTextAN onPress={() => this.redirectScreen('Register')} title={'Signup'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                        <ButtonTextAN onPress={() => this.redirectScreen('Login')} title={'Login'} fontSize={StylesApp.fontSize} color={StylesApp.button} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ConfirmPhoneView: {
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
    SignupAndFgPass: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
