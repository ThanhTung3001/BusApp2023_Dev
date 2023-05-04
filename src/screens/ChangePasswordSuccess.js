import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ChangePasswordSuccess = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.changepasswordsuccess, styles.changepasswordsuccessLayout]}
    >
      <View
        style={[
          styles.changepasswordsuccessChild,
          styles.changepasswordsuccessLayout,
        ]}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <Pressable
        style={styles.xongWrapper}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.xong, styles.xongTypo]}>Xong</Text>
      </Pressable>
      <Image
        style={styles.download292}
        resizeMode="cover"
        source={require("../assets/download-29-2.png")}
      />
      <Text style={[styles.iMtKhu, styles.xongTypo]}>
        Đổi mật khẩu thành công
      </Text>
      <Text style={styles.bnThay}>
        Bạn đã thay đổi thành công mật khẩu. Vui lòng đăng nhập với mật khẩu mới
        của bạn.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  changepasswordsuccessLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  xongTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  changepasswordsuccessChild: {
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
  xong: {
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  xongWrapper: {
    top: 446,
    left: 16,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    width: 343,
    height: 46,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  download292: {
    top: 162,
    left: 122,
    width: 130,
    height: 130,
    position: "absolute",
    overflow: "hidden",
  },
  iMtKhu: {
    top: 317,
    left: 42,
    fontSize: FontSize.size_5xl,
    color: "#1bbc79",
    position: "absolute",
  },
  bnThay: {
    top: 362,
    left: 26,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.mulishRegular,
    color: Color.text,
    textAlign: "center",
    width: 333,
    position: "absolute",
  },
  changepasswordsuccess: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangePasswordSuccess;
