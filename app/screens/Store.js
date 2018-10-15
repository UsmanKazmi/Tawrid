import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Store extends Component {
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: '#edf2f9'}}
        contentContainerStyle={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.iconTitle}>
              <View style={styles.icon} />
              <Text>Hello world</Text>
            </View>
            <View style={styles.buttonWrap}>
              <View style={styles.button} />
              <View style={styles.button} />
              <View style={styles.button} />
            </View>
          </View>
          <View>
            <Text>
            Some other content...
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.header}>
            <View style={styles.iconTitle}>
              <View style={styles.icon} />
              <Text style={styles.title}>
                Hello world this is some really long title right here, that
                goes on and on and on. And then some!
              </Text>
            </View>
            <View style={styles.buttonWrap}>
              <View style={styles.button} />
              <View style={styles.button} />
              <View style={styles.button} />
            </View>
          </View>
          <View>
            <Text>
              Some other content...
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf2f9',
  },
  card: {
    backgroundColor: 'white',
    height: 200,
    width: 320,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {x: 10, y: 10},
    padding: 10,
    marginTop: 10,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  iconTitle:{
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
  },
  icon: {
    height: 24,
    width: 24,
    backgroundColor: 'black',
    marginRight: 5,
  },
  title: {
    flex: 1,
  },
  buttonWrap: {
    flexDirection: 'row',
  },
  button: {
    height: 24,
    width: 24,
    backgroundColor: 'red',
    marginLeft: 5,
  }
});