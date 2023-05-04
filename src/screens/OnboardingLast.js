import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OnboardingLast = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardinglast, styles.onboardinglastLayout]}>
      <View style={[styles.onboardinglastChild, styles.onboardinglastLayout]} />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Text style={[styles.theoDiL, styles.theoDiLFlexBox]}>
        Theo dõi lộ trình xe
      </Text>
      <Text style={[styles.xeButHuContainer, styles.theoDiLFlexBox]}>
        <Text style={styles.xeButHu}>Xe Buýt Huế</Text>
        <Text style={styles.cungCpTnh}>
          {" "}
          cung cấp tính năng theo dõi lộ trình xe di chuyển và hỗ trợ đọc tên
          các trạm sắp đến, khắc phục tình trạng xuống sai trạm, giúp người dùng
          an tâm hơn khi di chuyển bằng giao thông công cộng.
        </Text>
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-3741.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3741.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3741.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3731.png")}
          />
        </View>
        <Pressable
          style={styles.honThnh}
          onPress={() => navigation.navigate("ShareLocation")}
        >
          <Text style={styles.honThnh1}>Hoàn thành</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={styles.xeButParent}>
        <Text style={[styles.xeBut, styles.huClr]}>Xe Buýt</Text>
        <Text style={[styles.hu, styles.huClr]}>huế</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardinglastLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  theoDiLFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 8,
    width: 8,
  },
  huClr: {
    color: Color.title1,
    textAlign: "left",
    position: "absolute",
  },
  onboardinglastChild: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
  },
  frameIcon: {
    height: "4.19%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0,
    position: "absolute",
    overflow: "hidden",
  },
  theoDiL: {
    top: 472,
    left: 28,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 331,
    color: Color.title,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  xeButHu: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  cungCpTnh: {
    fontFamily: FontFamily.mulishRegular,
  },
  xeButHuContainer: {
    top: 517,
    left: 33,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    color: Color.text,
    width: 309,
    height: 131,
  },
  frameItem: {
    marginLeft: 10,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  honThnh1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.title,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  honThnh: {
    marginLeft: 66,
  },
  frameParent: {
    top: 718,
    left: 16,
    width: 343,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  frameIcon1: {
    top: 165,
    left: 30,
    width: 315,
    height: 222,
    position: "absolute",
    overflow: "hidden",
  },
  xeBut: {
    top: 9,
    left: 2,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.satisfyRegular,
  },
  hu: {
    top: "0%",
    left: "54.71%",
    fontSize: FontSize.size_21xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.uTMDavidaRegular,
  },
  xeButParent: {
    top: 103,
    left: 102,
    width: 170,
    height: 52,
    position: "absolute",
  },
  onboardinglast: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default OnboardingLast;
