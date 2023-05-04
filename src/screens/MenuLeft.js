import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MenuLeft = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menuleft, styles.menuleftBg]}>
      <View style={[styles.menuleftChild, styles.menuleftPosition]} />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.menuleftPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base2.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon, styles.menuleftPosition]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
      <View style={[styles.menuleftItem, styles.menuleftPosition]} />
      <View style={styles.menuleftInner} />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Image
        style={styles.rectanglePosition}
        resizeMode="cover"
        source={require("../assets/rectangle-20184.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.download531Parent, styles.parentFlexBox]}>
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-53-1.png")}
          />
          <Text style={styles.vCaTi}>Vé của tôi</Text>
        </View>
        <View style={[styles.download541Parent, styles.parentFlexBox]}>
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-54-1.png")}
          />
          <Text style={styles.vCaTi}>Bản đồ trạm xe buýt</Text>
          <View style={styles.download781} />
        </View>
        <View style={[styles.download541Parent, styles.parentFlexBox]}>
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-56-1.png")}
          />
          <Text style={styles.vCaTi}>Bản đồ tuyến đường</Text>
          <View style={styles.download781} />
        </View>
        <View style={[styles.download541Parent, styles.parentFlexBox]}>
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-68-1.png")}
          />
          <Text style={styles.vCaTi}>Tìm kiếm xe</Text>
          <View style={styles.download781} />
        </View>
        <View style={[styles.download541Parent, styles.parentFlexBox]}>
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-70-1.png")}
          />
          <Text style={styles.vCaTi}>Kiểm soát hành trình</Text>
          <View style={styles.download781} />
        </View>
        <Pressable
          style={[styles.download541Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download--20230424t094927575-1.png")}
          />
          <Text style={styles.vCaTi}>Thông báo</Text>
          <View style={styles.download781} />
        </Pressable>
        <Pressable
          style={[styles.download541Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("ResponseFeedBack")}
        >
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-60-1.png")}
          />
          <Text style={styles.vCaTi}>Phản hồi/Góp ý</Text>
          <View style={styles.download781} />
        </Pressable>
        <Pressable
          style={[styles.download541Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("FeedBack")}
        >
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-59-1.png")}
          />
          <Text style={styles.vCaTi}>Đánh giá mức độ hài lòng</Text>
          <View style={styles.download781} />
        </Pressable>
        <Pressable
          style={[styles.download541Parent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("AppInfo")}
        >
          <Image
            style={styles.download531}
            resizeMode="cover"
            source={require("../assets/download-61-1.png")}
          />
          <Text style={styles.vCaTi}>Thông tin ứng dụng</Text>
          <View style={styles.download781} />
        </Pressable>
      </View>
      <View style={styles.frameView}>
        <View style={styles.parentFlexBox}>
          <View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-3711.png")}
            />
          </View>
          <View style={styles.kevinNguyenParent}>
            <Text style={styles.kevinNguyen}>Kevin Nguyen</Text>
            <Pressable
              style={styles.thngTinCContainer}
              onPress={() => navigation.navigate("AccountInfo")}
            >
              <Text style={styles.thngTinCNhn}>Thông tin cá nhân</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={[styles.download341, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/download-34-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuleftBg: {
    backgroundColor: Color.white,
    height: 812,
  },
  menuleftPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    height: 130,
    width: 337,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuleftChild: {
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
    width: "100%",
  },
  homeNavigatorIcon: {
    bottom: 0,
    height: 34,
  },
  menuleftItem: {
    backgroundColor: Color.gray_300,
    top: 0,
    left: 0,
    height: 812,
  },
  menuleftInner: {
    backgroundColor: "#f7f8fa",
    width: 337,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  rectangleView: {
    backgroundColor: Color.lightsalmon,
  },
  download531: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  vCaTi: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.mulishSemibold,
    color: Color.text,
    marginLeft: 12,
    textAlign: "left",
    flex: 1,
  },
  download531Parent: {
    padding: Padding.p_9xs,
    height: 40,
    alignItems: "center",
    width: 305,
  },
  download781: {
    width: 12,
    height: 12,
    marginLeft: 12,
    overflow: "hidden",
  },
  download541Parent: {
    marginTop: 20,
    padding: Padding.p_9xs,
    height: 40,
    alignItems: "center",
    width: 305,
  },
  frameParent: {
    top: 150,
    width: 305,
    left: 16,
    position: "absolute",
  },
  frameChild: {
    width: 70,
    height: 70,
  },
  kevinNguyen: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.white,
    textAlign: "left",
  },
  thngTinCNhn: {
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "left",
  },
  thngTinCContainer: {
    marginTop: 8,
  },
  kevinNguyenParent: {
    width: 205,
    justifyContent: "center",
    marginLeft: 20,
  },
  frameView: {
    top: 44,
    flexDirection: "row",
    width: 305,
    left: 16,
    position: "absolute",
  },
  download341: {
    top: 16,
    left: 305,
    width: 16,
    height: 16,
  },
  menuleft: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default MenuLeft;
