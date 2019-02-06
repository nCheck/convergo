import React, { Component } from 'react';

import { Container, Header, Footer,Content, Card, CardItem, Button,Text, Icon, Right, View } from 'native-base'

import { StyleSheet, DatePickerAndroid } from 'react-native'

import t from 'tcomb-form-native';

import axios from 'axios';

import IP from '../constants/Address'
import Address from '../constants/Address';


const fund = t.struct({
    causeTitle: t.String,
    description: t.String,
    amount: t.Number
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



export default class FundForm extends Component{


    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date()  };
    
        this.setDate = this.setDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    async setDate () {
        console.log("eeloo");
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({

              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {

                this.setState( { chosenDate : new Date(year, month, day) } )
              console.log( this.state.chosenDate )
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
        console.log(body)
        const url = IP + '/dummy'

        await fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }).then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson);
              })
              .catch((error) => {
                console.error(error);
              });

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

            <Button full
            onPress={ this.setDate }
            >
                <Text> Pick Date </Text>
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
  });