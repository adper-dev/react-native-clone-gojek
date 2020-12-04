import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const GopayFeature = (props) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={props.img} />
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
      </View>
    )
  }

export default GopayFeature;

const styles = StyleSheet.create({});
