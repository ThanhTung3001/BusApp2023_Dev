import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const ExpandMap = () => {
  return (
    <View style={styles.expandmap}>
      <Image
        style={[styles.expandmapChild, styles.expandmapChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2006.png")}
      />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.expandmapChildPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.download961, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download962, styles.downloadPosition]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download963, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download964, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download965, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download966, styles.downloadPosition]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download967, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download968, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download969, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download9610, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={styles.download20221118t1538211}
        resizeMode="cover"
        source={require("../assets/download--20221118t153821157-11.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  expandmapChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  downloadLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  downloadPosition: {
    left: 99,
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  expandmapChild: {
    top: 44,
    height: 768,
  },
  iphoneX11ProLightBas: {
    top: 0,
    height: 44,
    overflow: "hidden",
  },
  frameIcon: {
    height: "4.19%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    opacity: 0,
    width: "100%",
  },
  download961: {
    top: 229,
    left: 246,
    height: 30,
    width: 30,
  },
  download962: {
    top: 204,
  },
  download963: {
    top: 199,
    left: 42,
  },
  download964: {
    top: 351,
    left: 37,
  },
  download965: {
    top: 450,
    left: 219,
  },
  download966: {
    top: 502,
  },
  download967: {
    top: 616,
    left: 61,
  },
  download968: {
    top: 662,
    left: 246,
    height: 30,
    width: 30,
  },
  download969: {
    top: 369,
    left: 333,
  },
  download9610: {
    top: 748,
    left: 214,
  },
  download20221118t1538211: {
    top: 54,
    left: 19,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.07%",
    width: "3.73%",
    top: "7.09%",
    right: "4.8%",
    bottom: "90.84%",
    left: "91.47%",
  },
  expandmap: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ExpandMap;
