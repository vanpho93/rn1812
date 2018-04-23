import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class Account extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Account Component</Text>
                <TouchableOpacity onPress={() => navigate('SignIn')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'lightblue', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold'
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
