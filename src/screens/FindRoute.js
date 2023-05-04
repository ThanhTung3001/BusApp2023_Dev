import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const FindRoute = () => {
  return (
    <View style={[styles.findroute, styles.findrouteLayout1]}>
      <View style={[styles.findrouteChild, styles.findrouteLayout]} />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.findrouteLayout]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={[styles.frameIcon, styles.findrouteLayout2]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon, styles.findrouteLayout]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
      <Image
        style={[styles.findrouteItem, styles.findrouteItemPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2019.png")}
      />
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
      <View style={[styles.findrouteInner, styles.rectangleIconPosition]} />
      <Image
        style={styles.rectangleIconPosition}
        resizeMode="cover"
        source={require("../assets/rectangle-20181.png")}
      />
      <View style={[styles.tmTuynWrapper, styles.timKiem2FlexBox]}>
        <Text style={styles.tmTuyn}>Tìm tuyến</Text>
      </View>
      <View
        style={[styles.download20220725t1102121Parent, styles.parentFlexBox]}
      >
        <Image
          style={[styles.download20220725t1102121, styles.ic24IconLayout]}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-1.png")}
        />
        <Text style={[styles.tmTuynXe, styles.iTiAFlexBox]}>Tìm tuyến xe</Text>
        <Image
          style={[styles.download20220725t1102121, styles.ic24IconLayout]}
          resizeMode="cover"
          source={require("../assets/download--20230424t094927575-2.png")}
        />
      </View>
      <View style={[styles.iTiA2ChuynParent, styles.parentFlexBox]}>
        <Text style={[styles.iTiA, styles.iTiATypo]}>Đi tối đa 2 chuyến</Text>
        <Image
          style={[styles.ic24ChevronDownIcon, styles.ic24IconLayout]}
          resizeMode="cover"
          source={require("../assets/ic24chevrondown.png")}
        />
      </View>
      <View style={[styles.timKiemParent, styles.findrouteItemPosition]}>
        <View style={styles.timLayout}>
          <Image
            style={styles.download20220401t1717243}
            resizeMode="cover"
            source={require("../assets/download--20220401t171724341.png")}
          />
          <Text style={[styles.chnImI, styles.iTiATypo]}>Chọn điểm đi</Text>
        </View>
        <View style={[styles.timKiem1, styles.timLayout]}>
          <Image
            style={styles.download20220401t1717243}
            resizeMode="cover"
            source={require("../assets/download--20220401t1717243411.png")}
          />
          <Text style={[styles.chnImI, styles.iTiATypo]}>Chọn điểm đến</Text>
        </View>
      </View>
      <View style={[styles.timKiem2, styles.timKiem2FlexBox]}>
        <Image
          style={styles.ic24IconLayout}
          resizeMode="cover"
          source={require("../assets/ic24sync.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  findrouteLayout1: {
    height: 812,
    backgroundColor: Color.white,
  },
  findrouteLayout: {
    width: 375,
    left: 0,
  },
  findrouteLayout2: {
    width: "100%",
    overflow: "hidden",
  },
  findrouteItemPosition: {
    top: 88,
    position: "absolute",
  },
  downloadLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconPosition: {
    height: 280,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timKiem2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.white,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  ic24IconLayout: {
    height: 24,
    width: 24,
  },
  iTiAFlexBox: {
    textAlign: "justify",
    lineHeight: 30,
  },
  iTiATypo: {
    fontSize: FontSize.size_sm,
    color: Color.white,
  },
  timLayout: {
    padding: Padding.p_sm,
    height: 38,
    backgroundColor: Color.chocolate,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    flexDirection: "row",
    width: 343,
  },
  findrouteChild: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 812,
    backgroundColor: Color.white,
  },
  iphoneX11ProLightBas: {
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
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
    position: "absolute",
  },
  findrouteItem: {
    height: 724,
    width: 375,
    left: 0,
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
  findrouteInner: {
    backgroundColor: Color.lightsalmon,
  },
  tmTuyn: {
    fontSize: FontSize.size_lg,
    color: Color.title,
    textAlign: "left",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  tmTuynWrapper: {
    top: 220,
    borderRadius: Border.br_21xl,
    height: 46,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    width: 343,
    left: 16,
  },
  download20220725t1102121: {
    overflow: "hidden",
  },
  tmTuynXe: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "justify",
    lineHeight: 30,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  download20220725t1102121Parent: {
    top: 44,
    justifyContent: "space-between",
    width: 343,
  },
  iTiA: {
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    textAlign: "justify",
    lineHeight: 30,
    fontSize: FontSize.size_sm,
  },
  ic24ChevronDownIcon: {
    marginLeft: 2,
  },
  iTiA2ChuynParent: {
    top: 182,
  },
  download20220401t1717243: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  chnImI: {
    fontFamily: FontFamily.mulishRegular,
    width: 264,
    marginLeft: 10,
    textAlign: "left",
  },
  timKiem1: {
    marginTop: 10,
  },
  timKiemParent: {
    left: 16,
  },
  timKiem2: {
    top: 116,
    left: 320,
    borderRadius: Border.br_161xl,
    padding: Padding.p_9xs,
  },
  findroute: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default FindRoute;
