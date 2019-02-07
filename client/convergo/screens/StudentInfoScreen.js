import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Header, Content, Card,CardItem, List,Text, ListItem,Icon, Right, Footer, Button } from 'native-base'

import { StyleSheet, ScrollView, View } from 'react-native'

import StackedChart from './StackedChart';

export default class StudentInfoScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
      }

    static navigationOptions = {
        header: null,
      };
      


    render () {

        let state = this.state;

        return (

            <Container>

            <Content>

            <List>
            <ListItem itemDivider>
              <Text>January</Text>
            </ListItem>                    
            
            <StackedChart data={ [ 50, 10, 40, 95, 69 ] } />

            <ListItem itemDivider>
              <Text>February</Text>
            </ListItem>                    
            
            <StackedChart data={ [ 20, 56 , 35 , 76 , 53] } />

            <ListItem itemDivider>
              <Text>March</Text>
            </ListItem>                    
            
            <StackedChart data={ [ 50, 10, 40, 95, 69 ] } />

            <ListItem itemDivider>
              <Text>April</Text>
            </ListItem>                    
            
            <StackedChart data={ [ 90 , 30 , 10 , 50 , 36] } />

          </List>


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

    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }

  });