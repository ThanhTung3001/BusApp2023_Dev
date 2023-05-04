import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ShareLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sharelocation}>
      <View style={[styles.sharelocationChild, styles.sharelocationPosition]} />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.sharelocationItem, styles.sharelocationPosition]} />
      <View style={styles.download313Parent}>
        <Image
          style={styles.download313}
          resizeMode="cover"
          source={require("../assets/download-31-3.png")}
        />
        <View style={styles.choPhpTruyCpWrapperSpaceBlock}>
          <Text
            style={[styles.chiaSV, styles.chiaSVTypo]}
          >{`Chia sẻ vị trí của bạn 
với Xe Buýt Huế?`}</Text>
          <Text style={[styles.xemThngTin, styles.xemThngTinTypo]}>
            Để xem thông tin đường đi từng chặng, tìm kiếm các vị trí gần đó và
            nhận thông tin cập nhật về tình hình giao thông, hãy cho phép Maps
            tìm vị trí của bạn.
          </Text>
        </View>
        <Pressable
          style={[
            styles.choPhpTruyCpWrapper,
            styles.choPhpTruyCpWrapperSpaceBlock,
          ]}
          onPress={() => navigation.navigate("AllowNotitfication")}
        >
          <Text style={[styles.choPhpTruy, styles.xemThngTinTypo]}>
            Cho phép truy cập
          </Text>
        </Pressable>
      </View>
      <Image
        style={styles.download341}
        resizeMode="cover"
        source={require("../assets/download-34-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sharelocationPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  chiaSVTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  xemThngTinTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  choPhpTruyCpWrapperSpaceBlock: {
    marginTop: 30,
    alignItems: "center",
  },
  sharelocationChild: {
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
    width: "100%",
  },
  sharelocationItem: {
    backgroundColor: Color.gray_300,
  },
  download313: {
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  chiaSV: {
    fontSize: FontSize.size_lg,
    lineHeight: 26,
    color: Color.title,
    textAlign: "center",
  },
  xemThngTin: {
    lineHeight: 24,
    fontFamily: FontFamily.mulishRegular,
    color: Color.text,
    marginTop: 10,
    width: 311,
  },
  choPhpTruy: {
    alignSelf: "stretch",
    color: Color.white,
    display: "flex",
    width: 140,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    alignItems: "center",
  },
  choPhpTruyCpWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    borderStyle: "solid",
    borderColor: "#fd7a5c",
    borderWidth: 1,
    height: 40,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
    width: 311,
  },
  download313Parent: {
    top: 199,
    left: 16,
    borderRadius: Border.br_3xs,
    width: 343,
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
  sharelocation: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ShareLocation;
