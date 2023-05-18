import React from 'react';
import { Button } from 'react-native';
import {View, StyleSheet, Text,Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const SignInOrRegister = () => {
    const navigation = useNavigation()
    const [fontloaded] = useFonts({
        Poppins_Medium: require('../assets/Poppins/Poppins-Medium.ttf'),
        Poppins_Bold: require('../assets/Poppins/Poppins-Bold.ttf')
    })

    if(!fontloaded) {
        return null
    }
    return (
        <View>
            <Image source={require('../assets/banner.jpg')} style={{
                width:420,
                height:400
            }}/>
            <Text style={{
                fontSize: 20,
                fontFamily: 'Poppins_Bold',
                textAlign:'left',
                marginHorizontal: 30,
                color:'rgb(65, 68, 68)',
                marginVertical:10
            }}>KEEP IN TOUCH WITH PEOPLE OF SHEPHERDD</Text>
            <Text style={{
                fontSize: 15,
                fontFamily: 'Poppins_Medium',
                textAlign:'left',
                marginHorizontal: 30,
                color:'#767C7C',
                marginVertical:10
            }}>Sign in or register with your Shepherdd email</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-around'
            }}>
            <TouchableOpacity style={styles.btn} title='Register' onPress={()=> {
                navigation.navigate('Register')
            }}>
                <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} title='SignIn' onPress={()=> {
                navigation.navigate('SignIn')
            }}>
                <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        padding: 1,
        borderBottomWidth:1,
        borderBottomColor: 'red',
        marginTop: 120
    },

    btnText: {
        // marginTop:-80,
        fontSize: 20,
        fontFamily: 'Poppins_Bold',
        alignSelf:'center',
        textAlign:'center',
        color:"rgb(65, 68, 68)"
    },
})

export default SignInOrRegister;
