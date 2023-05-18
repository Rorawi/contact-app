import React from 'react';
import {View, StyleSheet, Text,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


const WelcomeScreen = () => {
    const navigation = useNavigation()
    const [fontloaded] = useFonts({
        Poppins_Medium: require('../assets/Poppins/Poppins-Medium.ttf'),
        Poppins_Bold: require('../assets/Poppins/Poppins-Bold.ttf')
    })

    if(!fontloaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={{
                flex:0.1,
                justifyContent:'flex-end'
            }}>
            <Image source={require('../assets/logo1.png')} style={styles.logo}/>
            </View>
            <Text style={styles.logoName}>SHEPHERDD CONTACTS</Text>
            <TouchableOpacity style={styles.btn} onPress={
                ()=> {
                    navigation.navigate('signinorregister')
                }
            }>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#F4F4F0',
    },

    logo: {
        width: 150,
        height: 150,
    },

    logoName: {
        fontFamily: "Poppins_Medium",
        fontSize: 30,
        color:'grey',
        width:200,
        marginTop: 50,
        alignSelf:'center',
        textAlign:'center'
    },

    btn: {
        padding: 5,
        borderBottomWidth:1,
        borderBottomColor: 'red',
        marginTop: 120
    },

    btnText: {
        fontSize: 20,
        fontFamily: 'Poppins_Bold',
        alignSelf:'center',
        textAlign:'center'
    },
})

export default WelcomeScreen;
