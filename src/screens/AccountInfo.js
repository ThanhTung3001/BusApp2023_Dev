import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AccountInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.accountinfo, styles.accountinfoLayout]}>
      <View style={[styles.accountinfoChild, styles.accountinfoPosition]} />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame3.png")}
      />
      <View style={[styles.accountinfoItem, styles.download351ShadowBox]} />
      <Pressable
        style={[styles.download20220725t1102121Parent, styles.parentPosition]}
        onPress={() => navigation.navigate("MenuLeft")}
      >
        <Image
          style={[styles.download20220725t1102121, styles.basicssearchLayout]}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-11.png")}
        />
        <Text style={[styles.tiKhonCa, styles.tiKhonCaTypo]}>
          Tài khoản của tôi
        </Text>
        <View style={[styles.basicssearch, styles.download351FlexBox]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </Pressable>
      <Text style={[styles.thngTinC, styles.tiKhonCaTypo]}>
        Thông tin cá nhân
      </Text>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.download741Parent}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-74-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Họ tên:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnTypo]}>Kevin Nguyen</Text>
        </View>
        <View style={styles.download751Parent}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-75-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Ngày sinh:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnTypo]}>01/05/1990</Text>
        </View>
        <View style={styles.download751Parent}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-76-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Giới tính:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnTypo]}>Nam</Text>
        </View>
        <View style={styles.download751Parent}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-79-2.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Số điện thoai:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnTypo]}>095 345678</Text>
        </View>
        <View style={styles.download751Parent}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-77-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Email:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnTypo]}>
            kevinnguyen0105@gmail.com
          </Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={[styles.ellipseWrapper, styles.frameLayout]}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-371.png")}
          />
        </View>
        <View style={[styles.download351, styles.download351FlexBox]}>
          <Image
            style={[styles.download741, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/download-36-1.png")}
          />
        </View>
      </View>
      <View style={styles.kevinNguyenWrapper}>
        <Text style={styles.kevinNguyen1}>Kevin Nguyen</Text>
      </View>
      <Pressable
        style={[
          styles.download20221119t0953154Parent,
          styles.download351FlexBox,
        ]}
        onPress={() => navigation.navigate("SignOut")}
      >
        <Image
          style={styles.download20221119t0953154}
          resizeMode="cover"
          source={require("../assets/download--20221119t095315420-1.png")}
        />
        <Text style={styles.ngXut}>Đăng xuất</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  accountinfoLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  accountinfoPosition: {
    width: 375,
    left: 0,
    top: 0,
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  download351ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  parentPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  basicssearchLayout: {
    height: 24,
    width: 24,
  },
  tiKhonCaTypo: {
    textAlign: "justify",
    lineHeight: 30,
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  download351FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconLayout: {
    height: 16,
    width: 16,
  },
  hTnTypo: {
    marginLeft: 10,
    fontSize: FontSize.size_base,
    textAlign: "justify",
    color: Color.text,
    lineHeight: 30,
  },
  frameLayout: {
    height: 105,
    width: 105,
  },
  accountinfoChild: {
    position: "absolute",
    height: 812,
    backgroundColor: Color.white,
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
  accountinfoItem: {
    shadowColor: "#f1f1f1",
    shadowRadius: 2,
    elevation: 2,
    height: 88,
    width: 375,
    left: 0,
    top: 0,
  },
  download20220725t1102121: {
    overflow: "hidden",
  },
  tiKhonCa: {
    fontSize: FontSize.size_xl,
    textAlign: "justify",
    lineHeight: 30,
  },
  vectorIcon: {
    display: "none",
  },
  basicssearch: {
    borderRadius: Border.br_141xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    height: 24,
    width: 24,
  },
  download20220725t1102121Parent: {
    top: 51,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  thngTinC: {
    top: 300,
    left: 18,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  download741: {
    overflow: "hidden",
  },
  hTn: {
    fontFamily: FontFamily.mulishRegular,
  },
  kevinNguyen: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    marginLeft: 10,
  },
  download741Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  download751Parent: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 340,
  },
  ellipseWrapper: {
    left: 0,
    top: 0,
    width: 105,
    position: "absolute",
  },
  download351: {
    top: 75,
    left: 75,
    borderRadius: Border.br_161xl,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 4,
    elevation: 4,
    width: 30,
    height: 30,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  frameGroup: {
    top: 110,
    left: 135,
    position: "absolute",
  },
  kevinNguyen1: {
    textAlign: "left",
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  kevinNguyenWrapper: {
    top: 225,
    left: 85,
    width: 205,
    alignItems: "center",
    position: "absolute",
  },
  download20221119t0953154: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  ngXut: {
    fontWeight: "600",
    fontFamily: FontFamily.mulishSemibold,
    color: Color.crimson,
    marginLeft: 12,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  download20221119t0953154Parent: {
    top: 698,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderWidth: 1,
    height: 40,
    padding: Padding.p_9xs,
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  accountinfo: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountInfo;
