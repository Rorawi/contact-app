import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { useFonts } from "expo-font";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontloaded] = useFonts({
    Poppins_Medium: require("../assets/Poppins/Poppins-Medium.ttf"),
    Poppins_Bold: require("../assets/Poppins/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/Poppins/Poppins-ExtraLight.ttf")
  });

  if (!fontloaded) {
    return null;
  }


  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/banner.jpg")}
          style={{
            width: 420,
            height: 250,
          }}
        />

        <View
          style={{
            marginTop: 30,
            marginHorizontal: 30,
          }}
        >
          <View style={styles.inputView}>
            <Text style={styles.formText}>Email</Text>
            <TextInput
              style={[styles.formText,{flex:1,paddingVertical: 6,paddingHorizontal:6}]}
              placeholderTextColor="#aaaaaa"
              placeholder="yourname@youremail.com"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.formText}>Password</Text>
            <TextInput
              style={[styles.formText,{flex:1,paddingVertical: 6,paddingHorizontal:6}]}
              placeholderTextColor="#aaaaaa"
              placeholder="....."
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => {
                setPassword(value);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("barcode");
          }}
        >
          <Text style={styles.btnText}> Sign In</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_SemiBold",
              fontSize: 16,
              color: "#333",
            }}
          >
            Forgot?
          </Text>
          <TouchableOpacity style={styles.forgotPasswordBtn}>
            <Text style={styles.forgotPasswordBtnText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
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
    fontSize: 20,
    fontFamily: "Poppins_Medium",
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
  },

  forgotPasswordBtn: {
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },

  forgotPasswordBtnText: {
    fontSize: 15,
    fontFamily: "Poppins_Bold",
    alignSelf: "center",
    textAlign: "center",
    color: "rgb(65, 68, 68)",
  },
});

export default SignIn;
