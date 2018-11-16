import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';



export default Loader = (Props) => {
   console.log(Props);
   return (
      Props.loading ?
         <View style={{ flex: 1, alignItems: 'flex-end', zIndex: 2, padding: 0, height: Props.height, position: Props.position, width: Props.width }}>
            <ActivityIndicator style={{ flex: 1, paddingRight: 10 }}
               size={Props.size} color={Props.color} />
         </View> : null

   );
}

