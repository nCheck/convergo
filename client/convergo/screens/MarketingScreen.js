import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base'

import { StyleSheet } from 'react-native'

export default class MarketingScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

            <Container>

            <Content>

            <Card>
            <CardItem>
              <Icon active name="logo-facebook" />
              <Text>Administrator</Text>
              <Right>
                <Icon name="arrow-forward" onPress={ ()=> this.props.navigation.navigate( 'Activity' ) } />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem>
              <Icon active name="logo-facebook" />
              <Text>Marketing</Text>
              <Right>
                <Icon name="arrow-forward" onPress={ ()=> this.props.navigation.navigate( 'Fundraiser' ) } />
              </Right>
             </CardItem>
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