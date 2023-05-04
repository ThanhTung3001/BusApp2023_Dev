import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AllowNotitfication = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.allownotitfication, styles.frameIconLayout]}>
      <View
        style={[
          styles.allownotitficationChild,
          styles.allownotitficationPosition,
        ]}
      />
      <View style={[styles.dichVu, styles.dichLayout]}>
        <View style={[styles.veDienTuParent, styles.ngWrapperFlexBox]}>
          <View style={[styles.veDienTu, styles.dienFlexBox]}>
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
            <Text style={[styles.traCuThng, styles.vCaTiTypo]}>{`Tra cứu
thông tin`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
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
            <Text style={[styles.traCuThng, styles.vCaTiTypo]}>{`Tìm kiếm 
xe`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t170113295-1.png")}
              />
            </View>
            <Text style={[styles.vCaTi, styles.vCaTiTypo]}>Vé của tôi</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
            <View
              style={[
                styles.download20230424t1646547Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230424t164814887-1.png")}
              />
            </View>
            <Text style={[styles.vCaTi, styles.vCaTiTypo]}>{`Kiểm soát
hành trình`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.dichVu1, styles.dichLayout]}>
        <View style={[styles.veDienTuParent, styles.ngWrapperFlexBox]}>
          <View style={[styles.veDienTu, styles.dienFlexBox]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t085730244-1.png")}
              />
            </View>
            <Text style={[styles.hotline, styles.vCaTiTypo]}>Hotline</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
            <View
              style={[
                styles.download20230425t0857302Wrapper,
                styles.wrapperLayout,
              ]}
            >
              <Image
                style={styles.download20230424t1646547}
                resizeMode="cover"
                source={require("../assets/download--20230425t085643782-1.png")}
              />
            </View>
            <Text style={[styles.phnNhHin, styles.vCaTiTypo]}>{`Phản ánh
hiện trường`}</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
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
            <Text style={[styles.traCuThng, styles.vCaTiTypo]}>Thời tiết</Text>
          </View>
          <View style={[styles.veDienTu1, styles.dienFlexBox]}>
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
            <Text style={[styles.phnNhHin, styles.vCaTiTypo]}>{`Chất lượng
không khí`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iphoneX11ProLightBas, styles.allownotitficationPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon, styles.homeIconLayout]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
      <Image
        style={[
          styles.allownotitficationItem,
          styles.allownotitficationPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-20191.png")}
      />
      <Image
        style={[styles.download962, styles.downloadLayout1]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download963, styles.download963Position]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download964, styles.downloadLayout1]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Image
        style={[styles.download965, styles.downloadLayout1]}
        resizeMode="cover"
        source={require("../assets/download-96-2.png")}
      />
      <Text style={[styles.tnhNngThng, styles.xeButHuClr]}>
        Tính năng thông minh
      </Text>
      <View
        style={[styles.allownotitficationInner, styles.rectangleIconPosition]}
      />
      <Image
        style={styles.rectangleIconPosition}
        resizeMode="cover"
        source={require("../assets/rectangle-20182.png")}
      />
      <View style={styles.timKiem}>
        <Image
          style={styles.downloadLayout}
          resizeMode="cover"
          source={require("../assets/download-44-1.png")}
        />
        <Text style={styles.tmKimA}>Tìm kiếm địa điểm...</Text>
        <Image
          style={styles.download20220110t1100420}
          resizeMode="cover"
          source={require("../assets/download--20220110t110042056-2.png")}
        />
      </View>
      <Image
        style={[styles.iphoneX11ProLightBas, styles.allownotitficationPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base1.png")}
      />
      <Image
        style={[styles.homeNavigatorIcon1, styles.homeIconLayout]}
        resizeMode="cover"
        source={require("../assets/home-navigator.png")}
      />
      <View style={[styles.rectangleView, styles.allownotitficationPosition]} />
      <View style={[styles.download811Parent, styles.download963Position]}>
        <Image
          style={styles.download811}
          resizeMode="cover"
          source={require("../assets/download-81-1.png")}
        />
        <View style={styles.wrapperSpaceBlock}>
          <Text style={[styles.xeButHu, styles.xeButHuClr]}>
            Xe Buýt Huế cần quyền cho phép hiển thị Thông báo để gửi đến bạn
            thông tin kịp thời, dữ liệu cập nhật mới nhất và nhiều tính năng
            thông minh khác.
          </Text>
        </View>
        <Pressable
          style={[styles.ngWrapper, styles.wrapperSpaceBlock]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={[styles.ng, styles.ngTypo]}>Đồng ý</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.download341, styles.downloadLayout]}
        resizeMode="cover"
        source={require("../assets/download-34-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  allownotitficationPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  dichLayout: {
    height: 114,
    width: 343,
    left: 16,
    position: "absolute",
  },
  ngWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  dienFlexBox: {
    padding: Padding.p_9xs,
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
  vCaTiTypo: {
    marginTop: 10,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_sm,
  },
  homeIconLayout: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  downloadLayout1: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  download963Position: {
    top: 199,
    position: "absolute",
  },
  xeButHuClr: {
    color: Color.text,
    fontSize: FontSize.size_base,
  },
  rectangleIconPosition: {
    height: 88,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    marginTop: 30,
    alignItems: "center",
  },
  ngTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  downloadLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  allownotitficationChild: {
    top: 0,
    width: 375,
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
    textAlign: "left",
    marginTop: 10,
    color: Color.darkslategray_100,
    lineHeight: 18,
  },
  veDienTuParent: {
    width: 343,
    left: 0,
    justifyContent: "center",
    top: 0,
    position: "absolute",
  },
  dichVu: {
    top: 408,
  },
  download20230425t0857302Wrapper: {
    backgroundColor: Color.honeydew_100,
  },
  hotline: {
    textAlign: "left",
    marginTop: 10,
    color: Color.darkslategray_100,
  },
  phnNhHin: {
    textAlign: "center",
    marginTop: 10,
    color: Color.darkslategray_100,
  },
  dichVu1: {
    top: 577,
  },
  iphoneX11ProLightBas: {
    height: 44,
    top: 0,
    width: 375,
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
  },
  allownotitficationItem: {
    top: 88,
    height: 300,
  },
  download962: {
    top: 204,
    left: 99,
    position: "absolute",
  },
  download963: {
    left: 42,
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  download964: {
    top: 159,
    left: 180,
    position: "absolute",
  },
  download965: {
    top: 234,
    left: 279,
    position: "absolute",
  },
  tnhNngThng: {
    top: 537,
    lineHeight: 30,
    textAlign: "justify",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    left: 16,
    position: "absolute",
  },
  allownotitficationInner: {
    backgroundColor: Color.lightsalmon,
  },
  tmKimA: {
    fontStyle: "italic",
    fontFamily: FontFamily.mulishRegularItalic,
    color: Color.gray_200,
    width: 264,
    textAlign: "left",
    marginLeft: 10,
    fontSize: FontSize.size_sm,
  },
  download20220110t1100420: {
    width: 12,
    height: 12,
    marginLeft: 10,
    overflow: "hidden",
  },
  timKiem: {
    top: 65,
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
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
    backgroundColor: Color.white,
  },
  homeNavigatorIcon1: {
    top: 778,
  },
  rectangleView: {
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
  xeButHu: {
    lineHeight: 24,
    height: 97,
    width: 311,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    color: Color.text,
  },
  ng: {
    color: Color.white,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "left",
  },
  ngWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    borderStyle: "solid",
    borderColor: "#fd7a5c",
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
    width: 311,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
  },
  download811Parent: {
    borderRadius: Border.br_3xs,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xl,
    alignItems: "center",
    width: 343,
    left: 16,
    backgroundColor: Color.white,
  },
  download341: {
    top: 215,
    left: 327,
    position: "absolute",
  },
  allownotitfication: {
    overflow: "hidden",
    height: 812,
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AllowNotitfication;
