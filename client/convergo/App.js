import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Root } from 'native-base';



class MainRoot extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loaded : false
    };
  }


  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState( { loaded : true } );
    console.log("Mounted" , this.state )
  }

  render() {
    if ( this.state.loaded ){

      return (
        <View style={ styles.container } >
          <Button
          title="Hello"
          onPress={ ()=> console.log("hello") }
          />
        </View>
      );

    }else{

      return (
        <View>
        <Text>
          Not Loaded
        </Text>
      </View>
      )

    }
  }
}


export default () =>{

  return (
    <Root>
      <MainRoot/>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
