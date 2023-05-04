import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OnboardingThird = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardingthird, styles.onboardingthirdLayout]}>
      <View
        style={[styles.onboardingthirdChild, styles.onboardingthirdLayout]}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Text style={[styles.xemThiGian, styles.ngiDngCFlexBox]}>
        Xem thời gian chờ xe buýt
      </Text>
      <Text style={[styles.ngiDngC, styles.ngiDngCFlexBox]}>
        Người dùng có thể kiểm tra thời gian xe buýt đến trạm được cung cấp bởi
        dữ liệu thời gian thực được từ GPS của xe.
      </Text>
      <View style={styles.bQuaParent}>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.bQua1, styles.bQua1Typo]}>Bỏ qua</Text>
        </Pressable>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3732.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("OnboardingLast")}>
          <Text style={[styles.tipTc1, styles.bQua1Typo]}>Tiếp tục</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame5.png")}
      />
      <View style={styles.xeButParent}>
        <Text style={[styles.xeBut, styles.huClr]}>Xe Buýt</Text>
        <Text style={[styles.hu, styles.huClr]}>huế</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingthirdLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  ngiDngCFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  bQua1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
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
  onboardingthirdChild: {
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
  xemThiGian: {
    top: 472,
    left: 28,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 331,
    color: Color.title,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "center",
  },
  ngiDngC: {
    top: 517,
    left: 33,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    fontFamily: FontFamily.mulishRegular,
    width: 309,
    height: 131,
    color: Color.text,
  },
  bQua1: {
    color: Color.text,
  },
  frameItem: {
    marginLeft: 10,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  tipTc1: {
    color: Color.title,
  },
  bQuaParent: {
    top: 718,
    left: 16,
    width: 343,
    alignItems: "center",
    justifyContent: "space-between",
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
  onboardingthird: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default OnboardingThird;
