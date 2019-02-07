import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Title, Button } from 'native-base'

import { StyleSheet } from 'react-native'



export default class AdminScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

            <Container>
            <Content>



            <Card>
            <Text>This is admin page</Text>
           </Card>

           <Card>
           <Text>This is admin page</Text>
           </Card>





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