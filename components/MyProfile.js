import React from "react";
import { Image, Linking, TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";


const MyProfile = () => {
  const [fontloaded] = useFonts({
    Poppins_Medium: require("../assets/Poppins/Poppins-Medium.ttf"),
    Poppins_Bold: require("../assets/Poppins/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/Poppins/Poppins-ExtraLight.ttf"),
  });

  if (!fontloaded) {
    return null;
  }
  const openLink = () => {
    Linking.openURL("https://www.linkedin.com/in/winifredasantewaaasante");
  };
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center"}}
      >
        <Image
          source={require("../assets/profile1.jpg")}
          style={styles.profile}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.name}>Winifred Asante</Text>
          <Text style={styles.status}>Web developer,Shepherdd</Text>
        </View>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          },
        ]}
      >
        <TouchableOpacity onPress={openLink} style={{ marginRight: 10 }}>
          <Entypo name="linkedin-with-circle" size={35} color="#4d73b8" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="twitter-with-circle" size={35} color="#4d73b8" />
        </TouchableOpacity>
      </View>

      <View style={{marginTop:30}}>
      <View style={styles.detailIcons}>
          <FontAwesome
            name="phone"
            size={24}
            color="#4d73b8"
          />
          <Text style={styles.text}>+233 000 000 000</Text>
        </View>
        <View style={styles.detailIcons}>
          <Entypo
            name="message"
            size={24}
            color="#4d73b8"
          />
          <Text style={styles.text}>wini@shepherdd.inc</Text>
        </View>
        <View style={styles.detailIcons}>
          <FontAwesome
            name="map-marker"
            size={24}
            color="#4d73b8"
          />
          <Text style={styles.text}>Shiashie, Accra</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 40,
    marginHorizontal: 40
  },
  detailIcons: {
    flexDirection: "row",
    alignItems:'center',
    marginBottom: 20
  },

  text: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#000",
    fontFamily: 'Poppins_SemiBold',
    fontSize: 17
  },

  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  name: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 15
  },
  
  status: {
    fontFamily: 'Poppins_Medium',
    fontSize: 16,
    color:'#333'
  },
});

export default MyProfile;
