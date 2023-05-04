import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OnboardingFirst = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardingfirst, styles.onboardingfirstLayout]}>
      <View
        style={[styles.onboardingfirstChild, styles.onboardingfirstLayout]}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame7.png")}
      />
      <Text style={styles.traCuThng}>Tra cứu thông tin chi tiết tuyến xe</Text>
      <Text style={styles.xeButHuContainer}>
        <Text style={styles.xeButHu}>Xe Buýt Huế</Text>
        <Text style={styles.choPhpNgi}>
          {" "}
          cho phép người dùng tìm thấy các thông tin chi tiết về từng tuyến xe
          như: Biểu đồ giờ xuất bến, các trạm đi qua, thông tin giá vé, thời
          gian hoạt động... Ngoài ra, người dùng có thể dễ dàng tìm thấy thông
          tin chi tiết về tất cả các trạm dừng gần vị trí hiện tại nhất.
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
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3742.png")}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("OnboardingSecond")}>
          <Text style={[styles.tipTc1, styles.bQua1Typo]}>Tiếp tục</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/frame8.png")}
      />
      <View style={styles.xeButParent}>
        <Text style={[styles.xeBut, styles.huClr]}>Xe Buýt</Text>
        <Text style={[styles.hu, styles.huClr]}>huế</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingfirstLayout: {
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
  onboardingfirstChild: {
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
  traCuThng: {
    top: 472,
    left: 28,
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
  choPhpNgi: {
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
  onboardingfirst: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default OnboardingFirst;
