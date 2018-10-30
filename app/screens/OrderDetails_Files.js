
import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Card_OrderDetails_Detail } from '../components/Card_OrderDetails_Detail';
import { SliderRange } from '../components/SliderRange';

export default class OrderDetails_Files extends Component {
    render() {
        return (

            <ScrollView style={styles.mainView}>
                <View style={styles.ImageBtnView}>
                    <TouchableOpacity style={styles.ImageBtn}>
                        <Image source={require('../../assets/icons/gallery.png')}
                            style={styles.imageStyleGallery} />
                        <Text style={{ marginLeft: 10, color: Colors.Yellow }}> Open Gallery </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginLeft: 40,
                    marginVertical: 20,
                }}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Colors.LightestGrey, }}>

                         <View style={styles.borderCircle}>
                                <Image source={require('../../assets/icons/excelfile.png')}
                                    style={styles.imageStyle} />
                                </View>

                        <View style={styles.textView}>
                            <Text style={{color: Colors.Green, fontSize: 12}}> Contacts.xlsx </Text>
                            <Text style={{fontSize: 12}}> 3.0 MB </Text>
                        </View>
                        <TouchableOpacity style={styles.DownloadBtn}>
                            <Text style={styles.btnText}>Download</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    marginLeft: 40,
                    marginVertical: 10,
                }}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Colors.LightestGrey, }}>
                    
                        <View style={styles.borderCircle}>
                                <Image source={require('../../assets/icons/excelfile.png')}
                                    style={styles.imageStyle} />
                            </View>

                        <View style={styles.textView}>
                            <Text style={{color: Colors.Green}}> Contacts.xlsx </Text>
                            <Text style={{fontSize: 12}}> 3.0 MB </Text>
                        </View>
                        <TouchableOpacity style={styles.DownloadBtn}>
                            <Text style={styles.btnText}>Download</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    borderWidth:1,
                    borderRadius:5,
                    borderColor:Colors.Grey,
                    margin:20,
                    padding:10

                }}>                               
                        <View style={styles.shippingView}>
                                <Image
                                        style={{height:15,width:15, }}
                                        source={require('../../assets/icons/shipping.png')}/>

                                <Text style={styles.shippingText}>
                                        Shipping:N/A
                                </Text>                       
                        </View>
                        

                        <View style={{ 
                            flexDirection: 'row'
                        }}>
                                    <SliderRange/>
                        </View>

                        <View style={styles.chatView}>
                                                    
                                <Text style={styles.chatText}>
                                    Created: 2018‑08‑17 
                                </Text>

                                <Text style={styles.requiredText}>
                                    Required Price Offer
                                </Text>

                            </View> 
                </View>
                <View style={{
                        flexDirection:"row",
                        justifyContent:'space-evenly'
                        }}>
                     <Card_OrderDetails_Detail/>
                     <Card_OrderDetails_Detail/>
                </View>
            </ScrollView>
        )

    }
}


const styles = StyleSheet.create({
    mainView: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        marginBottom: 30
    },
    ImageBtnView: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LightestGrey,
    },
    ImageBtn: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 40,

    },
    imageStyle: {
        width: 12,
        height: 15,
    },
    imageStyleGallery:{
        width: 40,
        height: 40,
    },
    textView: {
        width: '56%', 
        marginLeft: 10, 
        marginBottom: 20,
    },
    DownloadBtn: {
        alignItems: 'center', 
        marginTop: 10, 
        width: 80, 
        height: 25, 
        paddingVertical: 5,
        borderWidth: 1, 
        borderColor: Colors.LightestGrey, 
        backgroundColor: Colors.Green, 
        borderRadius: 20
    },
    btnText: {
        color: Colors.White, 
        fontSize: 10, 
        fontWeight: 'bold', 
    },
    shippingText:{
        // marginLeft:5,
        fontSize:11,
        textAlign:'left'
    },
    shippingView:{
        marginBottom:1,
        marginRight:10,
        marginLeft:10,
        flexDirection:'row',
    },
    chatView:{
        marginRight:10,
        marginLeft:10,
        flexDirection:'row',
    },
    chatText:{
        fontSize:10,
        textAlign:'left',
        color:Colors.DarkGrey
    },
    requiredText:{
        color:'red',
        fontSize:10,
        flex:1,
        textAlign:'right'
    },
    borderCircle:{
        borderRadius:40,
        width:40,
        height:40,
        backgroundColor:Colors.LighterGrey,
        justifyContent:'center',
        alignItems:'center'
    }
})