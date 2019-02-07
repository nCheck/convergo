import React, { Component } from 'react';

import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Title, Button, Image, View } from 'native-base'

import { StyleSheet, Dimensions } from 'react-native'

let {height, width} = Dimensions.get('window');

class AdminScreen extends Component<{}>{

    static navigationOptions = {
        header: null,
      };


    render () {

        
        return (


  



            <Container>

                <Content>
                    <Title>
                        Hello
                    </Title>
                </Content>

            </Container>





        )

    }







}

export default AdminScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
       }
  });