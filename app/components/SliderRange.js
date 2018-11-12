import React, { Component } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Slider from "react-native-slider";

export class SliderRange extends Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 30
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.sliderValue}
          trackStyle={{
            backgroundColor: 'grey',
          }}
          minimumTrackTintColor='red'
          thumbStyle={{
            backgroundColor: 'red',
          }}
          thumbTouchSize={{
            width: 2,
            height: 2
          }}
          minimumValue={1}
          maximumValue={100}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  trackStyle: {
    color: 'red'
  }



});

