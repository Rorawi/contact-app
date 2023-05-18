import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInOrRegister from './screens/SignInOrRegister';
import Register from './screens/Register';
import SignIn from './screens/SignIn';
import HomeQR from './screens/HomeQR';
import MyProfile from './components/MyProfile';
import PersonProfile from './components/PersonProfile'
import { useFonts } from 'expo-font';
import BarCode from './components/BarCode';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator()
export default function App() {

  const [fontLoaded] = useFonts({
    'Poppins-Black': require('./assets/Poppins/Poppins-Black.ttf'),
  });

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='welcome' component={WelcomeScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='signinorregister' component={SignInOrRegister} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Register' component={Register} options={{
        headerStyle:{
          backgroundColor:'#251554',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontFamily: fontLoaded ? 'Poppins-Black' : 'sans-serif',
        }
      }}/>
      <Stack.Screen name='SignIn' component={SignIn} options={{
        headerStyle:{
          backgroundColor:'#251554',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontFamily: fontLoaded ? 'Poppins-Black' : 'sans-serif',
        },
        title:'Sign In'
      }}/>
      <Stack.Screen name='myprofile' component={MyProfile} options={{
        headerStyle:{
          backgroundColor:'#251554',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontFamily: fontLoaded ? 'Poppins-Black' : 'sans-serif',
        },
        title:'My Profile'
      }}/>
      <Stack.Screen name='personProfile' component={PersonProfile} options={{
        headerStyle:{
          backgroundColor:'#251554',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontFamily: fontLoaded ? 'Poppins-Black' : 'sans-serif',
        },
        title:'Member Profile'
      }}/>
      <Stack.Screen name='qr' component={HomeQR} options={{
        headerStyle:{
          backgroundColor:'#251554',
        },
        headerRight:()=> {
          return <Ionicons name="person" size={24} color="white" style={{marginRight:20}}/>
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontFamily: fontLoaded ? 'Poppins-Black' : 'sans-serif',
        },
        title:'ShepHerdd'
      }}/>
      <Stack.Screen name='barcode' component={BarCode} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
