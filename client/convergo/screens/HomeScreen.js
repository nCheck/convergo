import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Text, Icon, Button,Right, Title } from 'native-base';

import { View, StyleSheet } from 'react-native'

export default class HomeScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (



    <Container>
        <Header/>
        
        <Content>

           <Card style={ styles.button } >
            <Button bordered full
             onPress={ ()=> this.props.navigation.navigate( 'Admin' ) } >
             
            <Text>Administrator</Text>
            </Button>
           </Card>


           <Card style={ styles.button } >
            <Button bordered full
             onPress={ ()=> this.props.navigation.navigate( 'Marketing' ) } >
            <Text>Marketing</Text>
            </Button>
           </Card>

           <Card style={ styles.button } >
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
    button : {
        marginTop : 80,
        padding : 40
        
    }
  });