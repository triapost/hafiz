/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";

import s1 from "../../assets/sounds/arp01.mp3";
import s2 from "../../assets/sounds/arp02_1.mp3";


const Page1Screen = ({ navigation }) => {


  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 30,
        justifyContent: "space-between",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/bc/15.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ marginLeft: 20, marginBottom:10 }}
            onPress={() => sound1.play()}
          >
            <Image
              source={require("../../assets/images/pages/p1/r1.png")}
              resizeMode="contain"
              style={styles.image2}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity 
          style={{ marginLeft: 8, marginBottom:10 }}
          onPress={() => sound2.play()}
          >
            <Image
              source={require("../../assets/images/pages/p1/be.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r3.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r4.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>

          
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r6.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r7.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r8.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r9.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r10.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8, marginBottom:10 }}>
            <Image
              source={require("../../assets/images/pages/p1/r11.png")}
              style={styles.image2}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "lightgray",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Home")}
        
        >
        <Text style={{ color: "white" }}>Önceki Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#6b386b",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("Page2")}
        >
          <Text style={{ color: "white" }}> Sonraki Sayfa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  image2: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    width: 50,
    height: 50,
    
    alignSelf: "center",
  },
});



export default Page1Screen;