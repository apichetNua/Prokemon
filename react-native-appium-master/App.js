import React, { Component } from 'react';
import { TouchableHighlight,BackHandler , StyleSheet, Text, TextInput, View,Linking } from 'react-native';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      url: '',
      isLogined: false,
  }
}


  inputChangeHandler = (value, name) => {
    this.setState({
      [name]: value
    })
  }
  Connect = () => {
    if ((this.state.url)) {
      this.setState({ isLogined: true });
      Linking.openURL(this.state.url)
    }
    else {
      this.setState({ isLogined: false });
    }
  }
  

  render() {
    return (
      <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput name="url" accessibilityLabel="url" style={LOCAL_STYLES.input} onChangeText={(text) => this.inputChangeHandler(text, "url")} />
        </View>      
        <Text accessibilityLabel="Connectstatus">{this.state.isLogined ? "success" : "fail"}</Text>
        <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="Connect" onPress={()=>this.Connect()}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableHighlight>
        {console.log("512")}
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#00b5ec"
  }
});