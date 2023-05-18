import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";


const QrCode = () => {
  const navigation = useNavigation();

  const [fontloaded] = useFonts({
    Poppins_Medium: require("../assets/Poppins/Poppins-Medium.ttf"),
    Poppins_Bold: require("../assets/Poppins/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/Poppins/Poppins-ExtraLight.ttf"),
  });

  if (!fontloaded) {
    return null;
  }

  let data = {
    name: "Wini",
    age: "19",
    gender: "female",
  };
  return (
    <View>
     <View style={styles.container}>
     <Text style={styles.h1}>Exchange Contact Information</Text>
      <Text style={styles.h2}>Scan this QR below to share your contacts</Text>
      <QRCode value={JSON.stringify({ data })} size={250} styles={styles.qr} />
     </View>
     <View style={styles.hr}></View>
     <View style={styles.scandiv}>
     <Text style={styles.scanh2}>Want to add new connection?</Text>
     <TouchableOpacity style={styles.scanBtn}
      onPress={() => {
        navigation.navigate("barcode");
      }}
     >
      <Text style={styles.scanh2}>Scan QR</Text>
     </TouchableOpacity>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 30,
  },

  h1: {
    fontSize: 18,
    fontFamily: "Poppins_Medium",
    color: "#333"
  },

  h2: {
    fontSize: 15,
    fontFamily: "Poppins_Medium",
    color: "#bababa",
    marginBottom: 20
  },

  qr: {
    flex: 1,
    alignSelf:"center"
  },

  hr: {
    height: 1,
    minWidth: 430,
    width:"100%",
    backgroundColor:"gray",
    marginTop:160,
    marginLeft: -40
  },

  scandiv: {
    flexDirection:"row",
    alignItems:"center",
    marginTop:15,
    marginLeft: -15
  },

  scanBtn: {
    borderWidth:2,
    borderColor:"#a50e0e",
    paddingVertical: 7,
    paddingHorizontal: 25,
    marginLeft: 10
  },

  scanh2: {
    fontSize: 15,
    fontFamily: "Poppins_Medium",
    color: "#262626"
  }
});

export default QrCode;
