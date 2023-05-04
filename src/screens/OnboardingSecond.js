import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OnboardingSecond = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardingsecond, styles.onboardingsecondLayout]}>
      <View
        style={[styles.onboardingsecondChild, styles.onboardingsecondLayout]}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Text style={styles.tmNgThng}>Tìm đường thông minh</Text>
      <Text style={styles.xeButHuContainer}>
        <Text style={styles.xeButHu}>Xe Buýt Huế</Text>
        <Text style={styles.giCho}>
          {" "}
          gợi ý cho người dùng tuyến đường thuận tiện và nhanh nhất theo hệ
          thống giao thông công cộng địa phương. Đặc biệt, những gợi ý này được
          đưa ra dựa trên những dữ liệu thực về các tuyến xe đang hoạt động tại
          thời điểm tìm kiếm.
        </Text>
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
            source={require("../assets/ellipse-3732.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("OnboardingThird")}>
          <Text style={[styles.tipTc1, styles.bQua1Typo]}>Tiếp tục</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame6.png")}
      />
      <View style={styles.xeButParent}>
        <Text style={[styles.xeBut, styles.huClr]}>Xe Buýt</Text>
        <Text style={[styles.hu, styles.huClr]}>huế</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingsecondLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  bQua1Typo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  onboardingsecondChild: {
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
  tmNgThng: {
    top: 472,
    left: 79,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.title,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    position: "absolute",
  },
  xeButHu: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  giCho: {
    fontFamily: FontFamily.mulishRegular,
  },
  xeButHuContainer: {
    top: 517,
    left: 33,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    textAlign: "center",
    width: 309,
    height: 131,
    color: Color.text,
    position: "absolute",
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
    fontSize: FontSize.size_base,
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
  onboardingsecond: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default OnboardingSecond;
