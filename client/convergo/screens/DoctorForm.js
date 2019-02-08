import React, { Component } from 'react';

import { Container, Header, Footer,Content, Card, CardItem, Button,Text, Icon, Right, View } from 'native-base'

import { StyleSheet, DatePickerAndroid, Image } from 'react-native'

import t from 'tcomb-form-native';
import { ImagePicker } from 'expo'

import axios from 'axios';

import IP from '../constants/Address'
import Address from '../constants/Address';


const fund = t.struct({
    causeTitle: t.String,
    description: t.String,
    doctorMail: t.String
  });

const Form = t.form.Form;

const options = {
    fields : {
        description : {
            multiline: true,
            stylesheet: {
                ...Form.stylesheet,
                textbox: {
                    ...Form.stylesheet.textbox,
                    normal: {
                        ...Form.stylesheet.textbox.normal,
                        height: 150
                    },
                    error: {
                        ...Form.stylesheet.textbox.error,
                        height: 150
                    }
                }
            }
        }
    }
}



export default class DoctorForm extends Component{


    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() , imageData : ''  };
    
        this.setDate = this.setDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    async setDate () {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({

              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {

                this.setState( { chosenDate : new Date(year, month, day) } )
              console.log( this.state.chosenDate.toDateString() )
              
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }        

    }

    handleChange(value) {
        this.setState({value});
    }

    async handleSubmit() {
        const date = this.state.chosenDate
        const value = this._form.getValue();
        const body = { ...value , date : date}

        var formData  = new FormData();

        for(var name in body) {
            formData.append(name, body[name]);
        }

        console.log(formData)
        const url = IP + '/dummy'

        try{
            // await fetch(url, {
            //     mode:'cors',
            //     method: 'POST',
            //     body: formData,
            //   }).then((response) => response.json())
            //       .then((responseJson) => {
            //         console.log(responseJson);
            //       })
            //       .catch((error) => {
            //         console.error(error);
            //       });
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            await xhr.send(formData);



        }catch (err){
            console.log(err)

        }

        console.log("no error")
        

    }




    static navigationOptions = {
        header: null,
      };


    render () {

        return (

            <Container>

            <Content>

            <View style={ styles.container } >

            <Form 
            type={ fund }

            value={ this.state.value }
            onChange={ this.handleChange }
            ref={c => this._form = c} 
            options={ options }/>

            <Button block success full
            onPress={ this.setDate }
            style={styles.button}
            >
                <Text> { this.state.chosenDate.toDateString() } </Text>
            </Button>


            </View>
            


            </Content>

            <Footer>

            <Button full
            onPress={ this.handleSubmit }
            >
              <Text> Submit </Text>
            </Button>

            </Footer>

            </Container>



        )

    }







}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    button:{
        marginBottom: 5
    }
  });