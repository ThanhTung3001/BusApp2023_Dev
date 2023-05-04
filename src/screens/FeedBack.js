import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const FeedBack = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.feedback, styles.feedbackLayout]}>
      <View style={[styles.feedbackChild, styles.feedbackPosition]} />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.feedbackPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={[styles.frameIcon, styles.feedbackLayout]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon, styles.feedbackPosition]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
      <View style={[styles.feedbackItem, styles.feedbackPosition]} />
      <View style={styles.download931Parent}>
        <Image
          style={styles.download931}
          resizeMode="cover"
          source={require("../assets/download-93-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.bnThyNgDngNyTinDnParent}>
            <Text style={[styles.bnThyNg, styles.hyTypo]}>
              Bạn thấy ứng dụng này tiện dụng?
            </Text>
            <View style={styles.bnVuiLngNhGiChtLParent}>
              <Text style={styles.bnVuiLngContainer}>
                <Text
                  style={styles.bnVuiLng}
                >{`Bạn vui lòng đánh giá chất lượng tiện dụng của `}</Text>
                <Text style={styles.xeButHu}>Xe Buýt Huế</Text>
                <Text style={styles.bnVuiLng}>
                  {" "}
                  bằng cách chọn số sao bên dưới.
                </Text>
              </Text>
              <View style={styles.download952Parent}>
                <Image
                  style={styles.downloadLayout}
                  resizeMode="cover"
                  source={require("../assets/download-95-2.png")}
                />
                <Image
                  style={[styles.download958, styles.downloadLayout]}
                  resizeMode="cover"
                  source={require("../assets/download-95-2.png")}
                />
                <Image
                  style={[styles.download958, styles.downloadLayout]}
                  resizeMode="cover"
                  source={require("../assets/download-95-2.png")}
                />
                <Image
                  style={[styles.download958, styles.downloadLayout]}
                  resizeMode="cover"
                  source={require("../assets/download-95-2.png")}
                />
                <Image
                  style={[styles.download958, styles.downloadLayout]}
                  resizeMode="cover"
                  source={require("../assets/download-95-6.png")}
                />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.frameGroup}
            onPress={() => navigation.navigate("MenuLeft")}
          >
            <View style={[styles.hyWrapper, styles.wrapperLayout]}>
              <Text style={[styles.hy, styles.hyTypo]}>Hủy</Text>
            </View>
            <View style={[styles.giWrapper, styles.wrapperLayout]}>
              <Text style={[styles.gi, styles.hyTypo]}>Gửi</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.download341}
        resizeMode="cover"
        source={require("../assets/download-34-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackLayout: {
    width: "100%",
    overflow: "hidden",
  },
  feedbackPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  hyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  downloadLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_9xs,
    height: 40,
    width: 140,
    borderWidth: 1,
    borderColor: "#fd7a5c",
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackChild: {
    top: 0,
    left: 0,
    height: 812,
    backgroundColor: Color.white,
  },
  iphoneX11ProLightBas: {
    height: 44,
    top: 0,
    left: 0,
    overflow: "hidden",
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
  homeNavigatorIcon: {
    bottom: 0,
    height: 34,
  },
  feedbackItem: {
    backgroundColor: Color.gray_300,
    top: 0,
    left: 0,
    height: 812,
  },
  download931: {
    width: 121,
    height: 83,
    overflow: "hidden",
  },
  bnThyNg: {
    fontSize: FontSize.size_lg,
    color: Color.title,
  },
  bnVuiLng: {
    fontFamily: FontFamily.mulishRegular,
  },
  xeButHu: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  bnVuiLngContainer: {
    lineHeight: 24,
    color: Color.text,
    textAlign: "center",
    width: 311,
    fontSize: FontSize.size_base,
  },
  download958: {
    marginLeft: 15,
  },
  download952Parent: {
    marginTop: 30,
    flexDirection: "row",
  },
  bnVuiLngNhGiChtLParent: {
    marginTop: 10,
    alignItems: "center",
  },
  bnThyNgDngNyTinDnParent: {
    alignItems: "center",
  },
  hy: {
    color: Color.coral_100,
    fontSize: FontSize.size_base,
  },
  hyWrapper: {
    paddingHorizontal: Padding.p_mini,
  },
  gi: {
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  giWrapper: {
    backgroundColor: Color.coral_100,
    paddingHorizontal: Padding.p_xl,
    marginLeft: 20,
  },
  frameGroup: {
    width: 343,
    marginTop: 40,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 20,
    alignItems: "center",
  },
  download931Parent: {
    top: 199,
    left: 16,
    borderRadius: Border.br_3xs,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xl,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.white,
  },
  download341: {
    top: 215,
    left: 327,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  feedback: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.white,
  },
});

export default FeedBack;
