import React, { Component } from 'react';

import { Container, Title, Text, Header, Content } from 'native-base'

import { StyleSheet } from 'react-native'

export default class SignInScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

                <Container>
                    <Header/>
                    <Content>

                    <Text>
                        Helllo
                    </Text>

                    </Content>
                </Container>



        )

    }







}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });