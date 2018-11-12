import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Tags from "react-native-tags";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class SearchTags extends Component {

    constructor() {
        super();
        this.state = {
            value: [
                20,
                60
            ],
            tags: [],
            text: ''
        }
    }
    enableScroll = () => this.setState({ scrollEnabled: true });

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
                        tagContainerStyle={{ backgroundColor: Colors.Green, }}
                        containerStyle={{ justifyContent: "center", borderBottomWidth: 1, }}
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
                        maxNumberOfTags={4}
                        containerStyle={{ justifyContent: "center", borderBottomWidth: 1, width: '100%' }}
                        inputStyle={{ backgroundColor: "white" }}
                        tagContainerStyle={{ backgroundColor: Colors.Green, display:'block' ,flex: 1 }}
                        tagTextStyle={{ color: 'white', verticalAlignText: 'center' }}

                    />
                </View>
                <View style={styles.MainView}>
                    <Text>Select Price</Text>
                    <Text>Price Range: {this.state.value[0]} - {this.state.value[1]}</Text>
                    <MultiSlider
                        values={[this.state.value[0], this.state.value[1]]}
                        onValuesChange={(value) => this.setState({ value })}
                        trackStyle={{ height: 6 }}
                        selectedStyle={{ backgroundColor: Colors.Green }}
                        containerStyle={{ height: 25, color: Colors.Green }}
                        sliderLength={350}
                        customMarker={this.CustomMarker}
                        min={1}
                        max={100}
                        step={2}
                        allowOverlap
                        snapped
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: 150, backgroundColor: '#ffc200', borderRadius: 50,
                            height: 50, justifyContent: 'center'
                        }}>
                        <Text
                            style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 14 }}>
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