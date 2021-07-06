import React from 'react';
import { StyleSheet, Text, View ,Image, TextInput} from 'react-native';


export default class ReadStoryScreen extends react.Component {

  constructor(){
    super();
  }
    render(){
        return(
            <View style={styles.container}>
            <View>
                style={{width:200, height: 200}}
              <Text style={{textAlign: 'center', fontSize: 30}}>Wily</Text>
            </View>
            
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Type here"
              onChangeText = {text=>this.setState({scannedBookId:text})}
              value={this.state.scannedBookId}/>
              </View>
              </View>
        );
    }


SearchFilter=async()=>{


}

    }
