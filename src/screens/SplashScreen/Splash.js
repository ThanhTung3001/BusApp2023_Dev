import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("OnboardingFirst")}
    >
      <Image
        style={[styles.splashChild, styles.splashPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-20061.png")}
      />
      {/* <Image
        style={[styles.splashItem, styles.splashPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2010.png")}
      /> */}
      {/* <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame9.png")}
      /> */}

      <View style={[styles.rectangleParent, styles.splashPositionIcon]}>
        <View style={[styles.frameChild, styles.framePosition]} />
        {/* <View style={[styles.frameItem, styles.framePosition]} /> */}
        <Image
          style={styles.objectsIcon}
          resizeMode="cover"
          source={require("../assets/objects.png")}
        />
        <View style={[styles.rectangleGroup, styles.download141Position]}>
          <View style={styles.frameInnerLayout} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
        </View>
      </View>
      <Image
        style={[styles.download141, styles.download141Position]}
        resizeMode="cover"
        source={require("../assets/download-14-1.png")}
      />
      <View style={styles.logoSplash}>
        <Image
          style={styles.download131}
          resizeMode="cover"
          source={require("../assets/download-13-1.png")}
        />
        {/* <View style={styles.xeButParent}>
          <Text style={[styles.xeBut, styles.huText]}>Xe Buýt</Text>
          <Text style={[styles.hu, styles.huText]}>huế</Text>
        </View> */}
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoSplash: {
    display: 'flex', width: width, alignContent: 'center', alignItems: 'center', justifyContent: 'center', height: 230, position: 'absolute', top: height / 2 - 200
  },
  splashPosition: {
    width: width,
    // height: height,
    left: 0,
    position: "absolute",

  },
  splashPositionIcon: {
    width: width,
    // height: height,
    left: 0,
    bottom: 0,
    position: "absolute",
    // backgroundColor: 'red'
  },
  framePosition: {
    top: "73.82%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  download141Position: {
    left: 17,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 3,
    width: 40,
    backgroundColor: Color.saddlebrown_100,
    borderRadius: Border.br_xl,
  },
  huText: {
    textShadowRadius: 3,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    // textAlign: "left",
    color: Color.white,
    // position: "absolute",
  },
  splashChild: {
    top: 0,
    width: width,
    height: height,
  },
  splashItem: {
    display: "none",
    top: 0,
    width: width,
    height: height,
  },
  frameIcon: {
    height: "4.19%",
    top: "95.81%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  homeNavigatorIcon: {
    bottom: 0,
    height: 34,
  },
  frameChild: {
    height: "26.18%",
    backgroundColor: "#7b2e00",
    bottom: "0%",
    top: "73.82%",
  },
  frameItem: {
    height: "3.66%",
    bottom: "22.51%",
    backgroundColor: "#a33d00",
  },
  objectsIcon: {
    // top: -2,
    left: 32,
    right: 32,
    width: 320,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    marginLeft: 20,
  },
  rectangleGroup: {
    // top: 161,
    flexDirection: "row",
    bottom: 25
  },
  rectangleParent: {
    // top: 621,
    height: 191,
  },
  download141: {
    // top: 719,
    width: 100,
    height: 89,
    bottom: 4,
    overflow: "hidden",
  },
  download131: {
    // top: height / 2 - 210,
    // left: 0,
    // right: 0,
    // display: 'flex',
    // justifyContent: 'center',
    width: 200,
    height: 210,
    // position: "absolute",
    // overflow: "hidden",
    // backgroundColor: 'blue'
  },
  xeBut: {
    // top: 14,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.satisfyRegular,
    left: 0,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.white,
  },
  hu: {
    top: "0%",
    left: "54.67%",
    fontSize: 55,
    textTransform: "uppercase",
    fontFamily: FontFamily.uTMDavidaRegular,
  },
  xeButParent: {
    // top: 352,
    // left: 75,
    // width: 275,
    height: 72,
    // position: "absolute",
  },
  splash: {
    // backgroundColor: "#e59393",
    flex: 1,
    overflow: "hidden",
    height: height,
    width: "100%",
  },
});

export default Splash;
