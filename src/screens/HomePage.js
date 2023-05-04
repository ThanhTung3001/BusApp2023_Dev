import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.homepage, styles.homepageLayout]}>
      <View style={[styles.homepageChild, styles.wrapperPosition]} />
      <View style={[styles.dichVu, styles.dichLayout]}>
        <View style={styles.veDienTuParent}>
          <View style={[styles.veDienTu, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t164654728-1.png")}
              />
            </View>
            <Text style={[styles.traCuThng, styles.vCaTiSpaceBlock]}>{`Tra cứu
thông tin`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t164757934-1.png")}
              />
            </View>
            <Text style={[styles.traCuThng, styles.vCaTiSpaceBlock]}>{`Tìm kiếm 
xe`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t170113295-11.png")}
              />
            </View>
            <Text style={[styles.vCaTi, styles.vCaTiTypo]}>Vé của tôi</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t164814887-11.png")}
              />
            </View>
            <Text style={[styles.vCaTi, styles.vCaTiTypo]}>{`Kiểm soát
hành trình`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.dichVu1, styles.dichLayout]}>
        <View style={styles.veDienTuParent}>
          <View style={[styles.veDienTu, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t085730244-11.png")}
              />
            </View>
            <Text style={[styles.hotline, styles.vCaTiTypo]}>Hotline</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t085643782-11.png")}
              />
            </View>
            <Text style={[styles.phnNhHin, styles.vCaTiSpaceBlock]}>{`Phản ánh
hiện trường`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t084810384-1.png")}
              />
            </View>
            <Text style={[styles.traCuThng, styles.vCaTiSpaceBlock]}>
              Thời tiết
            </Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienSpaceBlock]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t085014420-1.png")}
              />
            </View>
            <Text style={[styles.phnNhHin, styles.vCaTiSpaceBlock]}>{`Chất lượng
không khí`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iphoneX11ProLightBas, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/home-navigator1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("ExpandMap")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/rectangle-20192.png")}
        />
      </Pressable>
      <Image
        style={[styles.download962, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download963, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download964, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download965, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Text style={styles.tnhNngThng}>Tính năng thông minh</Text>
      <View style={[styles.homepageItem, styles.homepagePosition]} />
      <Image
        style={styles.homepagePosition}
        resizeMode="cover"
        source={require("../assets/rectangle-20183.png")}
      />
      <View
        style={[styles.download20221118t1538211Parent, styles.timKiemFlexBox]}
      >
        <Pressable
          style={styles.download20221118t1538211}
          onPress={() => navigation.navigate("MenuLeft")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/download--20221118t153821157-1.png")}
          />
        </Pressable>
        <View style={styles.xeButParent}>
          <Text style={[styles.xeBut, styles.huClr]}>Xe Buýt</Text>
          <Text style={[styles.hu, styles.huClr]}>huế</Text>
        </View>
        <Pressable
          style={styles.download20221118t1538211}
          onPress={() => navigation.navigate("Notification")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/download--20230424t094927575-2.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.timKiem, styles.timKiemFlexBox]}>
        <Image
          style={styles.download441}
          resizeMode="cover"
          source={require("../assets/download-44-1.png")}
        />
        <Text style={[styles.tmKimA, styles.vCaTiTypo]}>
          Tìm kiếm địa điểm...
        </Text>
        <Image
          style={styles.download20220110t1100420}
          resizeMode="cover"
          source={require("../assets/download--20220110t110042056-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepageLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  wrapperPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  dichLayout: {
    height: 106,
    width: 343,
    left: 16,
    position: "absolute",
  },
  dienSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_9xs,
    alignItems: "center",
    flex: 1,
  },
  wrapperLayout: {
    padding: Padding.p_mini,
    height: 60,
    width: 60,
    borderRadius: Border.br_16xl,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  vCaTiSpaceBlock: {
    marginTop: 10,
    color: Color.darkslategray_100,
  },
  vCaTiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_sm,
  },
  downloadLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  homepagePosition: {
    height: 130,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timKiemFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  huClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  homepageChild: {
    top: 0,
    left: 0,
    height: 812,
    backgroundColor: Color.white,
  },
  download20230424t1646547: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  download20230424t1646547Wrapper: {
    backgroundColor: Color.mistyrose,
  },
  traCuThng: {
    textAlign: "center",
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_sm,
    marginTop: 10,
    color: Color.darkslategray_100,
    lineHeight: 18,
  },
  veDienTu: {
    alignItems: "center",
  },
  veDienTu1: {
    marginLeft: 10,
    alignItems: "center",
  },
  vCaTi: {
    marginTop: 10,
    color: Color.darkslategray_100,
    textAlign: "left",
    lineHeight: 18,
  },
  veDienTuParent: {
    justifyContent: "center",
    flexDirection: "row",
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dichVu: {
    top: 480,
  },
  download20230425t0857302Wrapper: {
    backgroundColor: Color.honeydew_100,
  },
  hotline: {
    marginTop: 10,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  phnNhHin: {
    textAlign: "center",
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_sm,
    marginTop: 10,
    color: Color.darkslategray_100,
  },
  dichVu1: {
    top: 649,
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
    width: "100%",
  },
  homeNavigatorIcon: {
    bottom: 0,
    height: 34,
  },
  wrapper: {
    top: 88,
    height: 372,
  },
  download962: {
    top: 204,
    left: 99,
  },
  download963: {
    top: 199,
    left: 42,
  },
  download964: {
    top: 159,
    left: 180,
  },
  download965: {
    top: 234,
    left: 279,
  },
  tnhNngThng: {
    top: 609,
    fontSize: FontSize.size_base,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.text,
    textAlign: "justify",
    left: 16,
    position: "absolute",
  },
  homepageItem: {
    backgroundColor: Color.lightsalmon,
  },
  icon1: {
    overflow: "hidden",
  },
  download20221118t1538211: {
    width: 24,
    height: 24,
  },
  xeBut: {
    top: 13,
    left: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.satisfyRegular,
  },
  hu: {
    height: "65.91%",
    width: "36.47%",
    top: "6.82%",
    left: "50.88%",
    fontSize: FontSize.size_11xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.uTMDavidaRegular,
  },
  xeButParent: {
    width: 170,
    height: 44,
  },
  download20221118t1538211Parent: {
    top: 44,
    justifyContent: "space-between",
    alignItems: "center",
  },
  download441: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  tmKimA: {
    color: Color.gray_200,
    width: 264,
    marginLeft: 10,
  },
  download20220110t1100420: {
    width: 12,
    height: 12,
    marginLeft: 10,
    overflow: "hidden",
  },
  timKiem: {
    top: 107,
    borderRadius: Border.br_6xl,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: 46,
    padding: Padding.p_sm,
    alignItems: "center",
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  homepage: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    height: 812,
  },
});

export default HomePage;
