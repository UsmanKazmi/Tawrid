import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from '../helpers/Helpers';
import Tags from "react-native-tags";
import Slider from "react-native-slider";

export default class SearchTags extends Component {

    constructor(){
        super();
        this.state = {
            value: 1
        }
    }

    render() {
        return (
            <View style={styles.ParentView}>
                <View style={styles.MainView}>
                    <Tags
                        initialText="Company"
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center", borderBottomWidth: 1 }}
                        inputStyle={{ backgroundColor: "white" }}
                    />
                </View>
                <View style={styles.MainView}>
                    <Tags
                        initialText="Category"
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center", borderBottomWidth: 1 }}
                        inputStyle={{ backgroundColor: "white" }}
                    />
                </View>
                <View style={styles.MainView}>
                    <Tags
                        initialText="#Tags"
                        onChangeTags={tags => console.log(tags)}
                        onTagPress={(index, tagLabel, event, deleted) =>
                            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        maxNumberOfTags = {4}
                        containerStyle={{ justifyContent: "center", borderBottomWidth: 1, width: '100%'}}
                        inputStyle={{ backgroundColor: "white" }}
                        tagContainerStyle={{backgroundColor: 'cyan'}}
                        tagTextStyle={{color: 'white', verticalAlignText: 'center'}}

                    />
                </View>
                <View style={styles.MainView}>
                    <Text>Price Range</Text>
                    <Text>Value: {this.state.value}</Text>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => this.setState({value})} 
                        minimumValue = {1}
                        maximumValue={100} 
                        trackStyle={{
                            backgroundColor:'white',
                            color:'green'
                          }}
                        thumbStyle={{
                            backgroundColor:'#5baba9',
                            color:'blue'
                          }}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={{width: 150, backgroundColor: '#ffc200', borderRadius: 50, 
                            height: 50, justifyContent: 'center'}}>
                        <Text 
                            style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 14}}>
                            Search
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    MainView: {
        marginHorizontal: 20,
        marginVertical: 20,
        height: 70,
    }
})