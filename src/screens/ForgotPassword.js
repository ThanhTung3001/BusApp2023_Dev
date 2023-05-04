import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.forgotpassword, styles.frameIconLayout]}>
      <View
        style={[styles.forgotpasswordChild, styles.forgotpasswordPosition]}
      />
      <View
        style={[styles.forgotpasswordItem, styles.forgotpasswordPosition]}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={styles.download20220725t1102121Parent}>
        <Image
          style={[styles.download20220725t1102121, styles.basicssearchLayout]}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-11.png")}
        />
        <Text style={[styles.qunMtKhu, styles.textTypo]}>Quên mật khẩu</Text>
        <View style={[styles.basicssearch, styles.frameWrapperFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View
        style={[styles.download20221121t1138536, styles.frameWrapperFlexBox]}
      >
        <Image
          style={styles.download20221201t0936277}
          resizeMode="cover"
          source={require("../assets/download--20221201t093627797-1.png")}
        />
      </View>
      <Pressable
        style={[styles.chngThcWrapper, styles.frameWrapperFlexBox]}
        onPress={() => navigation.navigate("ChangePasswordSuccess")}
      >
        <Text style={[styles.chngThc, styles.textTypo]}>Chứng thực</Text>
      </Pressable>
      <View style={[styles.frameParent, styles.frameWrapperFlexBox]}>
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <View style={[styles.nhp4MSCGiTi0Wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.nhp4MContainer, styles.text1FlexBox]}>
              <Text style={styles.nhp4MTypo}>{`Nhập 4 mã số đã được gửi tới
`}</Text>
              <Text style={styles.textTypo}>0905678911</Text>
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.wrapperLayout}>
            <Text style={[styles.text1, styles.nhp4MTypo]}>5</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.nhp4MTypo]}>4</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.nhp4MTypo]}>8</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.nhp4MTypo]}>4</Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.giLiMWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.giLiM, styles.nhp4MTypo]}>Gửi lại mã</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  forgotpasswordPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  basicssearchLayout: {
    height: 24,
    width: 24,
  },
  textTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  frameWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    padding: Padding.p_9xs,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1FlexBox: {
    textAlign: "center",
    lineHeight: 26,
  },
  nhp4MTypo: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    padding: Padding.p_3xs,
    width: 35,
    borderColor: "#757575",
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_9xs,
    borderBottomWidth: 1,
    borderStyle: "solid",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotpasswordChild: {
    height: 812,
  },
  forgotpasswordItem: {
    shadowColor: "#f1f1f1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    height: 88,
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
  download20220725t1102121: {
    overflow: "hidden",
  },
  qunMtKhu: {
    lineHeight: 30,
    textAlign: "justify",
    color: Color.text,
    fontSize: FontSize.size_xl,
  },
  vectorIcon: {
    width: 16,
    height: 16,
    display: "none",
  },
  basicssearch: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    borderRadius: Border.br_141xl,
    height: 24,
    width: 24,
  },
  download20220725t1102121Parent: {
    top: 51,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  download20221201t0936277: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  download20221121t1138536: {
    top: 118,
    left: 135,
    backgroundColor: Color.mistyrose,
    width: 105,
    height: 105,
    borderRadius: Border.br_141xl,
    flexDirection: "row",
    position: "absolute",
  },
  chngThc: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "left",
  },
  chngThcWrapper: {
    top: 446,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    height: 46,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    width: 343,
    left: 16,
  },
  nhp4MContainer: {
    fontSize: FontSize.size_base,
    color: Color.text,
  },
  nhp4MSCGiTi0Wrapper: {
    alignSelf: "stretch",
  },
  frameWrapper: {
    width: 280,
  },
  text1: {
    color: Color.black,
    textAlign: "center",
    lineHeight: 26,
    fontSize: FontSize.size_xl,
  },
  container: {
    marginLeft: 16,
  },
  frameGroup: {
    marginTop: 30,
    flexDirection: "row",
  },
  giLiM: {
    fontSize: FontSize.size_sm,
    color: Color.color,
    textAlign: "center",
    lineHeight: 26,
  },
  giLiMWrapper: {
    width: 74,
  },
  frameContainer: {
    borderColor: "#f2726a",
    width: 65,
    height: 23,
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 243,
    left: 47,
    position: "absolute",
  },
  forgotpassword: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default ForgotPassword;
