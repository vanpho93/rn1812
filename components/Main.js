import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Account } from './Account';
import { Loading } from './Loading';
import { SignIn } from './SignIn';
import { StackNavigator } from 'react-navigation';
// export class Main extends Component {
//     render() {
//         return (
//             <SignIn />
//         );
//     }
// }

export const Main = StackNavigator({
  Account: { screen: Account },
  Loading: { screen: Loading },
  SignIn: { screen: SignIn },
}, { headerMode: 'none' });

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightblue', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
