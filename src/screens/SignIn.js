import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signin, styles.signinLayout]}>
      <View style={[styles.signinChild, styles.signinLayout]} />
      <Image
        style={[styles.frameIcon, styles.signinLayout1]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frameParent, styles.ngNhp1Position]}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.tnNgNhpParent}>
              <Text style={styles.tnNgNhpTypo}>{`Tên đăng nhập `}</Text>
              <View style={styles.nhpWrapper}>
                <Text style={styles.nhpTypo1}>Nhập...</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameWrapperFlexBox]}>
            <View style={styles.tnNgNhpParent}>
              <Text style={styles.tnNgNhpTypo}>Mật khẩu</Text>
              <View style={styles.nhpWrapper}>
                <Text style={[styles.nhp1, styles.nhpTypo1]}>Nhập...</Text>
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={require("../assets/group-1723.png")}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.qunPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.tnNgNhpTypo}>Quên password?</Text>
          </Pressable>
        </View>
        <View style={styles.frameView}>
          <Pressable
            style={[styles.ngNhpWrapper, styles.frameWrapperFlexBox]}
            onPress={() => navigation.navigate("ShareLocation")}
          >
            <Text style={[styles.ngNhp, styles.nhpTypo]}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
      <Text style={[styles.ngNhp1, styles.nhpTypo]}>Đăng nhập</Text>
      <Text style={styles.hocNgNhp}>{`Hoặc đăng nhập `}</Text>
      <View style={[styles.download242Parent, styles.frameWrapperFlexBox]}>
        <View style={styles.downloadLayout}>
          <Image
            style={styles.logoHues1}
            resizeMode="cover"
            source={require("../assets/logo-hues-1.png")}
          />
        </View>
        <View style={[styles.download243, styles.downloadLayout]}>
          <Image
            style={styles.download261}
            resizeMode="cover"
            source={require("../assets/download-26-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signinLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  signinLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  ngNhp1Position: {
    left: 16,
    position: "absolute",
  },
  frameWrapperFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  nhpTypo1: {
    color: Color.darkgray,
    fontFamily: FontFamily.mulishRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  nhpTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  downloadLayout: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: Border.br_161xl,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  signinChild: {
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
  tnNgNhpTypo: {
    textAlign: "left",
    color: Color.text,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  nhpWrapper: {
    borderColor: "#e9e9e9",
    borderBottomWidth: 1,
    height: 36,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    borderStyle: "solid",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  tnNgNhpParent: {
    justifyContent: "center",
    flex: 1,
  },
  frameWrapper: {
    justifyContent: "center",
    width: 343,
  },
  nhp1: {
    flex: 1,
  },
  frameChild: {
    width: 18,
    height: 13,
    marginLeft: 10,
  },
  frameContainer: {
    marginTop: 20,
    justifyContent: "center",
    width: 343,
  },
  qunPassword: {
    marginTop: 20,
  },
  frameGroup: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  ngNhp: {
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  ngNhpWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    height: 46,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 343,
  },
  frameView: {
    marginTop: 30,
    alignItems: "center",
  },
  frameParent: {
    top: 148,
    alignItems: "center",
    width: 343,
  },
  ngNhp1: {
    top: 88,
    fontSize: FontSize.size_5xl,
    color: Color.title,
    left: 16,
    position: "absolute",
  },
  hocNgNhp: {
    top: 480,
    left: 123,
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.text,
    position: "absolute",
  },
  logoHues1: {
    width: 50,
    height: 27,
  },
  download261: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  download243: {
    marginLeft: 40,
  },
  download242Parent: {
    top: 525,
    left: 97,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  signin: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignIn;
