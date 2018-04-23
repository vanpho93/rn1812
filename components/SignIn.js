import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class SignIn extends Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
          <View style={styles.container}>
            <Text style={styles.title}>SignIn Component</Text>
            <TouchableOpacity onPress={() => navigate('Account')} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#41A045', 
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
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
},
})
