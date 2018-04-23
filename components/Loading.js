import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class Loading extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Loading Component</Text>
            <TouchableOpacity onPress={() => alert(123)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Show</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#7A609C', 
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
