import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Button,Text, Icon, Right } from 'native-base'

import { StyleSheet } from 'react-native'

export default class FinanceScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

            <Container>

            <Content>


            <Card>
            <Button bordered full
             onPress={ ()=> this.props.navigation.navigate( 'Admin' ) } >
            <Text>Administrator</Text>
            </Button>
           </Card>


           <Card>
            <Button bordered full
             onPress={ ()=> this.props.navigation.navigate( 'Marketing' ) } >
            <Text>Marketing</Text>
            </Button>
           </Card>

           <Card>
            <Button bordered full
             onPress={ ()=> this.props.navigation.navigate( 'Finance' ) } >
            <Text>Finance</Text>
            </Button>
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