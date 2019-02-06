import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Footer, Button } from 'native-base'

import { StyleSheet } from 'react-native'

export default class FundraiserScreen extends Component{

    static navigationOptions = {
        header: null,
      };


    render () {

        return (

            <Container>

            <Content>

            <Card>

           </Card>

           <Card>

           </Card>


            </Content>

            <Footer>

            <Button full
            onPress={ () => this.props.navigation.navigate('FundForm') }
            >
              <Text> Add Fundraiser </Text>
            </Button>

            </Footer>
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