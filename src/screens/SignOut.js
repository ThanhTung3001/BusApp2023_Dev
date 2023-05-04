import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SignOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signout}>
      <View style={[styles.signoutChild, styles.signoutPosition]} />
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <Pressable
        style={[styles.download20220725t1102121Parent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("MenuLeft")}
      >
        <Image
          style={[styles.download20220725t1102121, styles.download731Layout]}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-11.png")}
        />
        <Text style={[styles.tiKhonCa, styles.hTnFlexBox]}>
          Tài khoản của tôi
        </Text>
        <View style={styles.basicssearch}>
          <Image
            style={[styles.vectorIcon, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </Pressable>
      <Text style={[styles.thngTinC, styles.hTnFlexBox]}>
        Thông tin cá nhân
      </Text>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.download741Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-74-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Họ tên:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnFlexBox]}>
            Kevin Nguyen
          </Text>
        </View>
        <View style={[styles.download751Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-75-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Ngày sinh:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnFlexBox]}>
            01/05/1990
          </Text>
        </View>
        <View style={[styles.download751Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-76-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Giới tính:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnFlexBox]}>Nam</Text>
        </View>
        <View style={[styles.download751Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-79-2.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Số điện thoai:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnFlexBox]}>
            095 345678
          </Text>
        </View>
        <View style={[styles.download751Parent, styles.parentFlexBox]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-77-1.png")}
          />
          <Text style={[styles.hTn, styles.hTnTypo]}>Email:</Text>
          <Text style={[styles.kevinNguyen, styles.hTnFlexBox]}>
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
        <View style={[styles.download351, styles.download351SpaceBlock]}>
          <Image
            style={[styles.download741, styles.downloadLayout1]}
            resizeMode="cover"
            source={require("../assets/download-36-1.png")}
          />
        </View>
      </View>
      <View style={styles.kevinNguyenParent}>
        <Text style={[styles.kevinNguyen1, styles.kevinTypo]}>
          Kevin Nguyen
        </Text>
        <View style={styles.download731Parent}>
          <View style={[styles.download731, styles.downloadLayout]}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group3.png")}
            />
          </View>
          <Text style={styles.chnhSa}>Chỉnh sửa</Text>
        </View>
      </View>
      <View
        style={[styles.download20221119t0953154Parent, styles.ngWrapperLayout]}
      >
        <Image
          style={styles.download20221119t0953154}
          resizeMode="cover"
          source={require("../assets/download--20221119t095315420-1.png")}
        />
        <Text style={styles.ngXut}>Đăng xuất</Text>
      </View>
      <View style={[styles.signoutItem, styles.signoutPosition]} />
      <View style={[styles.download811Parent, styles.download351SpaceBlock]}>
        <Image
          style={styles.download811}
          resizeMode="cover"
          source={require("../assets/download-81-11.png")}
        />
        <View style={styles.wrapperSpaceBlock}>
          <Text style={[styles.bnMunNg, styles.hTnTypo]}>
            Bạn muốn đăng xuất khỏi ứng dụng?
          </Text>
        </View>
        <Pressable
          style={[styles.ngWrapper, styles.wrapperSpaceBlock]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.ng}>Đồng ý</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.download341, styles.downloadLayout1]}
        onPress={() => navigation.navigate("AccountInfo")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/download-34-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeNavigatorIcon, styles.signoutPosition]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signoutPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  download731Layout: {
    height: 24,
    width: 24,
  },
  hTnFlexBox: {
    textAlign: "justify",
    lineHeight: 30,
  },
  downloadLayout1: {
    height: 16,
    width: 16,
  },
  parentLayout: {
    width: 343,
    left: 16,
  },
  hTnTypo: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_base,
    color: Color.text,
  },
  frameLayout: {
    height: 105,
    width: 105,
  },
  download351SpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  kevinTypo: {
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  downloadLayout: {
    borderRadius: Border.br_161xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  ngWrapperLayout: {
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapperSpaceBlock: {
    marginTop: 30,
    alignItems: "center",
  },
  signoutChild: {
    top: 0,
    width: 375,
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
  download20220725t1102121: {
    overflow: "hidden",
  },
  tiKhonCa: {
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  vectorIcon: {
    display: "none",
  },
  basicssearch: {
    borderRadius: Border.br_141xl,
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    height: 24,
    width: 24,
    alignItems: "center",
  },
  download20220725t1102121Parent: {
    top: 51,
    justifyContent: "space-between",
    alignItems: "center",
    width: 343,
    left: 16,
    position: "absolute",
  },
  thngTinC: {
    top: 326,
    left: 18,
    fontSize: FontSize.size_lg,
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    position: "absolute",
  },
  download741: {
    overflow: "hidden",
  },
  hTn: {
    marginLeft: 10,
    textAlign: "justify",
    lineHeight: 30,
  },
  kevinNguyen: {
    marginLeft: 10,
    fontSize: FontSize.size_base,
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  download741Parent: {
    alignItems: "center",
  },
  download751Parent: {
    marginTop: 8,
    alignItems: "center",
  },
  frameParent: {
    top: 366,
    position: "absolute",
  },
  ellipseWrapper: {
    left: 0,
    width: 105,
    top: 0,
    position: "absolute",
  },
  download351: {
    top: 75,
    left: 75,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 30,
    height: 30,
    paddingVertical: Padding.p_10xs,
    borderRadius: Border.br_161xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameGroup: {
    top: 110,
    left: 135,
    position: "absolute",
  },
  kevinNguyen1: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.text,
  },
  groupIcon: {
    width: 12,
    height: 12,
  },
  download731: {
    backgroundColor: "#e0f5eb",
    height: 24,
    width: 24,
    alignItems: "center",
  },
  chnhSa: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    color: Color.title1,
    textAlign: "left",
    marginLeft: 10,
  },
  download731Parent: {
    borderRadius: 120,
    borderColor: "#21c87a",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_7xs,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  kevinNguyenParent: {
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
    borderColor: "#e6e6e6",
    padding: Padding.p_9xs,
    alignItems: "center",
    width: 343,
    left: 16,
    position: "absolute",
  },
  signoutItem: {
    backgroundColor: Color.gray_300,
    top: 0,
    width: 375,
    height: 812,
  },
  download811: {
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  bnMunNg: {
    textAlign: "left",
  },
  ng: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  ngWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    borderColor: "#fd7a5c",
    width: 311,
    paddingVertical: Padding.p_9xs,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    marginTop: 30,
  },
  download811Parent: {
    top: 199,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_11xl,
    width: 343,
    left: 16,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  download341: {
    left: 327,
    top: 215,
    position: "absolute",
  },
  homeNavigatorIcon: {
    top: 778,
    height: 34,
  },
  signout: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignOut;
