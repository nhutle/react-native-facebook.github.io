import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback,  TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
        </TouchableOpacity>
        <TouchableNativeFeedback 
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
        </TouchableWithoutFeedback>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
