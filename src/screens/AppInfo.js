import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AppInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.appinfo, styles.appinfoLayout]}>
      <View style={[styles.appinfoChild, styles.appinfoPosition]} />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.appinfoPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <View style={[styles.appinfoItem, styles.appinfoPosition]} />
      <View
        style={[
          styles.download20220725t1102121Parent,
          styles.ngDngXeContainerLayout,
        ]}
      >
        <Pressable
          style={styles.basicssearchLayout}
          onPress={() => navigation.navigate("MenuLeft")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/download--20220725t110212197-11.png")}
          />
        </Pressable>
        <Text style={[styles.thngTinNg, styles.xeButHuTypo]}>
          Thông tin ứng dụng
        </Text>
        <View style={[styles.basicssearch, styles.basicssearchLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <Text style={[styles.ngDngXeContainer, styles.containerFlexBox]}>
        <Text style={styles.ngDng}>{`Ứng dụng `}</Text>
        <Text style={styles.xeButHuTypo}>Xe Buýt Huế</Text>
        <Text
          style={styles.ngDng}
        >{` là một dự án phi lợi nhuận với mong muốn nâng cao chất lượng trải nghiệm khi sử dụng các phương tiện giao thông công cộng của người dân.
`}</Text>
      </Text>
      <Text style={[styles.yLNgContainer, styles.containerFlexBox]}>
        <Text style={styles.yLNgDngCiTMinPh}>
          <Text style={styles.yLNg}>{`Đây là ứng dụng cài đặt miễn phí.
`}</Text>
          <Text style={styles.linHChngTi}>
            <Text style={styles.ngDng}>{`Liên hệ chúng tôi: `}</Text>
          </Text>
        </Text>
        <Text style={styles.linHChngTi}>
          <Text style={styles.supportbuythuevn1}>support@buythue.vn</Text>
        </Text>
      </Text>
      <Image
        style={styles.download852}
        resizeMode="cover"
        source={require("../assets/download-85-21.png")}
      />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.appinfoPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appinfoLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  appinfoPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ngDngXeContainerLayout: {
    width: 343,
    left: 16,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  xeButHuTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  basicssearchLayout: {
    height: 24,
    width: 24,
  },
  containerFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  appinfoChild: {
    height: 812,
    backgroundColor: Color.white,
  },
  iphoneX11ProLightBas: {
    height: 44,
    overflow: "hidden",
  },
  appinfoItem: {
    shadowColor: "#f1f1f1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    height: 88,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  thngTinNg: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    textAlign: "justify",
    color: Color.text,
  },
  vectorIcon: {
    width: 16,
    height: 16,
    display: "none",
  },
  basicssearch: {
    borderRadius: Border.br_141xl,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  download20220725t1102121Parent: {
    top: 51,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  ngDng: {
    fontFamily: FontFamily.mulishRegular,
  },
  ngDngXeContainer: {
    top: 298,
    lineHeight: 24,
    height: 97,
    fontSize: FontSize.size_base,
    color: Color.text,
    width: 343,
    left: 16,
  },
  yLNg: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.mulishSemibold,
  },
  linHChngTi: {
    fontSize: FontSize.size_base,
  },
  yLNgDngCiTMinPh: {
    color: Color.black,
  },
  supportbuythuevn1: {
    fontWeight: "500",
    fontFamily: FontFamily.mulishMedium,
    color: Color.title1,
  },
  yLNgContainer: {
    top: 425,
    left: 43,
    lineHeight: 26,
  },
  download852: {
    top: 118,
    left: 113,
    width: 150,
    height: 150,
    position: "absolute",
    overflow: "hidden",
  },
  appinfo: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default AppInfo;
