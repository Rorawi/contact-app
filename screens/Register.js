import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const [fontloaded] = useFonts({
    Poppins_Medium: require("../assets/Poppins/Poppins-Medium.ttf"),
    Poppins_Bold: require("../assets/Poppins/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/Poppins/Poppins-ExtraLight.ttf"),
  });

  if (!fontloaded) {
    return null;
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          <ImageBackground
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              height: 180,
              backgroundColor: "#F4F4F0",
            }}
            source={{ uri: image }}
          >
            {!image ? (
             <View>
                <Ionicons name="ios-person-outline" size={60} color="#a1a1a1" style={{alignSelf:'center'}}/>
                <Text style={{ fontFamily: "Poppins_Medium" }}>
                  Add a Profile photo
                </Text>
                </View>
            ) : (
              <TouchableOpacity onPress={pickImage} 
                style={{
                  paddingVertical: 12,
                  paddingHorizontal:25,
                  borderWidth: 3,
                  borderColor: 'rgb(65, 68, 68)',
                  borderRadius:6
                }}
              >
                <Text style={{
                  color:'#fff',
                  fontFamily: 'Poppins_Bold',
                  fontSize: 17
                }}>Edit Photo</Text>
              </TouchableOpacity>
            )}
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 30,
          }}
        >
          <View style={styles.inputView}>
            <Text style={styles.formText}>Full Name</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="Winifred"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.formText}>Email</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="yourname@youremail.com"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.formText}>Phone Number</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="+233 (000) 000 000"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.formText}>Role</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="Front-end developer"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.formText}>Twitter</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="/winifredasante753"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.formText}>LinkedIn</Text>
            <TextInput
              style={{ paddingHorizontal: 6 }}
              placeholderTextColor="#aaaaaa"
              placeholder="/winifredasantewaaasante"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("qr");
          }}
        >
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 30,
          }}
        ></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    fontSize: 22,
    fontFamily: "Poppins_Bold",
    color: "rgb(65, 68, 68)",
  },
  formText: {
    textAlign: "right",
    fontFamily: "Poppins_Medium",
    fontSize: 16,
    color: "#333",
  },

  btn: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#4d73b8",
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 5,
  },

  btnText: {
    fontSize: 17,
    fontFamily: "Poppins_Medium",
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
  },
});
export default Register;
