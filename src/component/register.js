import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import StylesApp from './StylesApp';
import Icon from "react-native-vector-icons/FontAwesome5";
import InputAN from './InputAN';
import CheckBoxAN from './CheckBoxAN';
import ButtonTextAN from './ButtonTextAN';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state= {
          phone: null,
          isError: false,
          error:null,
          isRead:false,
        }
        this.changeCountry = this.changeCountry.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.postPhone = this.postPhone.bind(this);
    }
    
    checkPhone=  (input)=> {
        if(typeof(input) != 'number') {
            this.setState({
                isError:true,
                error:'Phone is not validation'
            })
            return false;
        }

        this.setState({
            isError:false,
            error:null
        })
        return true;
    }

    check

    changeCountry= (text)=> {
        this.setState({
            country:text
        })

        //get data from input
    }

    changePhone= (text)=> {
        this.setState({
            phone:text
        })

        // get data from input
    }

    postPhone() {
        if(this.checkPhone(this.state.phone)) {
            // post data on server
        }
    }

    render() {
        return (
            <View style={styles.loginView}>
            <View>
            <View style={styles.buttonSelect}>
                        <Text style={{color:StylesApp.text, fontSize:StylesApp.fontSize,}}>Country</Text>
                        <TouchableOpacity style={{flexDirection:"row",alignItems:'center',justifyContent: 'space-between'}} onPress={()=>{
                            this.setState({
                                isSelect : true
                            })
                        }}>
                            <Text style={{color:StylesApp.text, fontSize:StylesApp.fontSize}}>
                                VietNam (+84)
                            </Text>
                            <Icon name='chevron-right' style={{marginLeft: 20, fontSize:10}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{overflow: 'hidden',width:350, height:50, backgroundColor:'white', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                        <InputAN placeholder = 'Phone' fontSize={StylesApp.fontSize} bgColor={'white'}/>
                    </View>
                    <View style={styles.buttonForm}>
                         <ButtonTextAN title={'Next'} fontSize={StylesApp.fontSize} color={'white'} bgColor={StylesApp.button} width={350} height={50}/>
                    </View>
                <View style={{marginTop:10, flexDirection:'row', justifyContent:'center', alignItem:'center'}}>
                    <CheckBoxAN fontSize={14} color={'black'}/>
                    <Text style={{color:StylesApp.text, fontSize:StylesApp.fontSize}}>Toi chap nhan </Text>
                    <TouchableOpacity>
                    <Text style={{color:StylesApp.button, textDecorationLine:'underline', fontSize:StylesApp.fontSize}}>Chinh sach, dieu khoan</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.SignupAndFgPass}>
                    <ButtonTextAN onPress={this.redirectScreen} title={'Signup'} fontSize={StylesApp.fontSize} color={StylesApp.button}/>
                    <ButtonTextAN onPress={this.redirectScreen} title={'Forgot password'} fontSize={StylesApp.fontSize} color={StylesApp.button}/>
                </View>
            </View>
        </View>
        )
    }
}

const styles= StyleSheet.create({
    loginView: {
        justifyContent:"flex-start",
        alignItems:'center',
        flexDirection:'column',
        marginTop:5,
    },
    buttonSelect: { 
        padding:20, 
        justifyContent: 'space-between',
        alignItems:'center', 
        flexDirection:'row', 
        width:350, 
        height:50, 
        backgroundColor:'white', 
        borderTopLeftRadius:20, 
        borderTopRightRadius:20
    },
    buttonForm: { 
        marginTop:10,
        borderRadius:20,
        overflow:'hidden'
    },
    SignupAndFgPass: {
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
