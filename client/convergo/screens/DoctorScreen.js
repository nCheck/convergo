import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Header, Content, Card,CardItem, List,Text, ListItem,Icon, Right, Footer, Button } from 'native-base'

import { StyleSheet, ScrollView, View } from 'react-native'

import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class DoctorScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['No.', 'Doctor', 'Venue', 'Date'],
          widthArr: [80, 100, 120, 100 ] ,
          tableData: [
            ['1', '2', '3', '4'],
            ['Nehal', 'Shreya', 'Suyas', 'Nehal'],
            ['Dharavi', 'Agnel', 'Dharavi', 'Bhiwandi'],
            ['06th Jan', '08th Jan', '26th Jan', '06th Feb']
          ]
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
              <Text>Completed Fundraiser</Text>
            </ListItem>                    
            
            <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                    _.zip(...state.tableData).map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>



            <ListItem itemDivider>
              <Text> Completed Fundraiser </Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>


            </Content>

            <Footer>

            <Button full
            onPress={ () => this.props.navigation.navigate('DoctorForm') }
            >
              <Text> Schedule Doctor </Text>
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

    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }

  });