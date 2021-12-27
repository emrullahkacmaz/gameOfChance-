import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class MyComponent extends Component {
  constructor(props) {
    super(props) ;
    this.state={

      sayilar: "",
    };
  }

  btnclick=() => {
    var s="";
    for(var i=1; i<=6; i++){
      var tahmin= Math.floor(Math.random()*49);
     
      if(i==6){
      s+=tahmin.toString();
      
      }
      else{

        s+=tahmin.toString()+ " ,";
      }
    }
    this.setState({
      sayilar: s
    });
  }
  render() {

    return (
      <View style={{justifyContent:"space-between",margin:5},{flexDirection:"row"}}>
        <Button 
         title='oluştur' onPress={this.btnclick}></Button>
        <Text style={{fontSize:50}} >sayilar: {this.state.sayilar} </Text>
      </View>);
  }
}
