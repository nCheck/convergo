import React from "react";
import { AppRegistry, Image, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Setting", "Finance"];


export default class SideBar extends React.Component {


  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={ this.props.routes }
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>

                  <Text
                  style = { styles.button }
                  >{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
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
      padding : 30
  }
});