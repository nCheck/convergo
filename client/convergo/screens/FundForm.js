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
        this.state = { chosenDate: new Date() , imageData : ''  };
    
        this.setDate = this.setDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._pickImage = this._pickImage.bind(this);
      }

    static navigationOptions = {
        header: null,
      };

    async setDate () {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({

              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {

                var date = new Date(year, month, day)
                this.setState( { chosenDate : date.toDateString()  } )
              
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
        var imageName = this.state.imageData.split('/').pop(-1)
        var image = {
            uri : this.state.imageData,
            type : 'image/jpeg' ,
            name : imageName
        }
        const body = { ...value , date : date , image : image}

        var formData  = new FormData();

        for(var name in body) {
            formData.append (name, body[name]);
        }

        console.log(formData)
        const url = IP + '/dummy'



        axios({
            method: 'post',
            url: url,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        

    }

    _pickImage = async () => {
        console.log("hello")
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });

    
        if (!result.cancelled) {
          this.setState({ imageData: result.uri });
        }
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
                <Text> { this.state.chosenDate } </Text>
            </Button>

            <Button style={styles.button}
             onPress={this._pickImage}
             block success full
            >

            <Text> Pick Banner Image </Text>
            </Button>

            { this.state.imageData == '' ?
             <Text style={{height: 20, flex: 1, justifyContent : 'center', marginLeft: 100}} >No Image Selected</Text> :
             <Image source={{uri: this.state.imageData}} style={{height: 200, width: null, flex: 1}} /> 
             }

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