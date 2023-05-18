import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QrCode from '../components/QrCode';

const HomeQR = () => {
    return (
        <View style={{marginLeft: 40}}>
            <QrCode/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeQR;
