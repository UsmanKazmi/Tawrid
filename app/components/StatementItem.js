import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class StatementItem extends Component<Props> {
    render(){
        return (
            <View onPress={this.props.onpress} >
                <View style={{padding:30}}>
                    <View style={styles.horizontal_container}>
                        <View style={styles.horizontal_label}>
                            <Text style={styles.label_id}>ID:</Text>
                            <Text style={styles.label_id}>{this.props.id}</Text>
                        </View>
                        <View>
                            <Text style={styles.label_price_2}>{this.props.price_2}</Text>
                        </View>
                    </View>

                    <View style={styles.horizontal_container}>
                        <View style={styles.horizontal_label}>
                            <Text> No: </Text>
                            <Text>{this.props.track_no}</Text>
                        </View>
                        <View style={styles.horizontal_label}>
                            <Text>Type: </Text>
                            <Text>{this.props.type}</Text>
                        </View>
                    </View>

                    <View style={styles.horizontal_container}>
                        <View style={styles.horizontal_label}>
                            <Text> Date: </Text>
                            <Text>{this.props.date}</Text>
                        </View>
                        <View>
                            <Text>{this.props.status}</Text>
                        </View>
                    </View>

                    <View style={styles.horizontal_label}>
                        <Text>-Value </Text>
                        <Text style={styles.label_blue}>{this.props.price}</Text>
                    </View>

                </View>

                <View style={{backgroundColor:'#E3E3E3', width:100+"%", height:1}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    label: {
        fontSize: 12,
        fontWeight: '400',
        color: '#68DDDB',
        alignSelf: 'baseline',
      },

    horizontal_container: {
        flexDirection: 'row',
        width: 100+"%",
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    horizontal_label: {
        flexDirection: 'row',
    },

    label_id: {
        color: 'black',
        fontSize: 18,
        marginBottom: 4,
    },

    label_price_2: {
        fontSize: 18,
        color: '#EEB808',
    },

    label_blue: {
        color: '#4ED9E8',
    },
    
  
  });