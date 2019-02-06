import React, { Component } from 'react';

import { Container, Title, Text } from 'native-base'

import { StyleSheet } from 'react-native'

export default class SettingScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

                <Container>
                    <Text>
                        Helllo
                    </Text>
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