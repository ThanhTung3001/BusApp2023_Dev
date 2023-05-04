import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.notification, styles.notificationLayout]}>
      <View
        style={[styles.notificationChild, styles.notificationChildPosition]}
      />
      <Image
        style={[styles.iphoneX11ProLightBas, styles.notificationChildPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <View style={styles.notificationItem} />
      <Pressable
        style={[styles.download20220725t1102121Parent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("MenuLeft")}
      >
        <Image
          style={styles.download20220725t1102121}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-11.png")}
        />
        <Text style={[styles.thngBo, styles.thngBoTypo]}>Thông báo</Text>
        <View style={styles.basicssearch}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </Pressable>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text
                style={[styles.tinQuanTrng, styles.pmSpaceBlock]}
              >{`Tin quan trọng đừng bỏ lỡ `}</Text>
              <Text style={[styles.pm, styles.pmTypo]}>02:45 PM</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            Lịch hoạt động của xe buýt vào dịp lễ 30/4, 1/5 đã có rồi đây, bạn
            nhớ lưu lại nhé.
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text style={[styles.tinQuanTrng, styles.pmSpaceBlock]}>
                Lễ này bạn đi đâu?
              </Text>
              <Text style={[styles.pm, styles.pmTypo]}>23/04/2023</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            Đi đâu cũng được miễn là mình vui, nhưng trước tiên phải lên xe buýt
            Huế đặt ngay vé xe chứ không là ko kịp đâu nha.
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text style={[styles.tinQuanTrng, styles.pmSpaceBlock]}>
                Bạn đâu rồi?
              </Text>
              <Text style={[styles.pm, styles.pmTypo]}>21/04/2023</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            Bạn ơi, khảo sát của xe Buýt Huế sắp kết thúc lại, bạn làm giúp xe
            Buýt Huế nhé.
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text style={[styles.tinQuanTrng, styles.pmSpaceBlock]}>
                Những mã giảm giá cuối cùng.
              </Text>
              <Text style={[styles.pm, styles.pmTypo]}>21/04/2023</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            2 ngày ưu đãi cuối cùng cho mã VIVU giảm 30k mọi chuyến xe. Đừng bỏ
            lỡ!
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text style={[styles.tinQuanTrng, styles.pmSpaceBlock]}>
                Vi vu thả ga, không lo về giá
              </Text>
              <Text style={[styles.pm, styles.pmTypo]}>20/04/2023</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            Nhập mã VIVU, giảm ngay 30k mọi chuyến xe khi đặt vé trên Xe Buýt
            Huế. Hấp dẫn quá, nhanh tay kẻo hết !
          </Text>
        </View>
        <View style={styles.frameParentShadowBox}>
          <View style={[styles.frameWrapper, styles.parentFlexBox]}>
            <View
              style={[
                styles.download20230424t0949275Parent,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230424t0949275}
                resizeMode="cover"
                source={require("../assets/download--20230424t094927575-21.png")}
              />
              <Text style={[styles.tinQuanTrng, styles.pmSpaceBlock]}>
                Tin vui, tin vui tới đây!
              </Text>
              <Text style={[styles.pm, styles.pmTypo]}>15/04/2023</Text>
            </View>
          </View>
          <Text style={[styles.lchHotNg, styles.pmTypo]}>
            Kéo dài mã ưu đãi giảm 30% cho mọi tuyến xe khi đặt vé tháng.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationLayout: {
    height: 812,
    backgroundColor: Color.white,
  },
  notificationChildPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  thngBoTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    color: Color.text,
  },
  pmSpaceBlock: {
    marginLeft: 10,
    lineHeight: 30,
  },
  pmTypo: {
    fontFamily: FontFamily.mulishRegular,
    textAlign: "justify",
  },
  notificationChild: {
    height: 812,
    backgroundColor: Color.white,
  },
  iphoneX11ProLightBas: {
    height: 44,
    overflow: "hidden",
  },
  notificationItem: {
    height: 88,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#f1f1f1",
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  download20220725t1102121: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  thngBo: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    textAlign: "justify",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
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
    height: 24,
    width: 24,
    alignItems: "center",
  },
  download20220725t1102121Parent: {
    top: 51,
    left: 16,
    justifyContent: "space-between",
    width: 343,
    flexDirection: "row",
    position: "absolute",
  },
  download20230424t0949275: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  tinQuanTrng: {
    fontSize: FontSize.size_base,
    textAlign: "justify",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    color: Color.text,
    flex: 1,
  },
  pm: {
    fontSize: FontSize.size_smi,
    color: Color.title1,
    marginLeft: 10,
    lineHeight: 30,
  },
  download20230424t0949275Parent: {
    flex: 1,
  },
  frameWrapper: {
    width: 343,
    flexDirection: "row",
  },
  lchHotNg: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
    display: "flex",
    marginTop: 5,
    color: Color.text,
    fontFamily: FontFamily.mulishRegular,
    alignItems: "center",
    width: 343,
  },
  frameGroup: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#f1f1f1",
    width: 375,
    backgroundColor: Color.white,
  },
  frameParentShadowBox: {
    marginTop: 10,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#f1f1f1",
    width: 375,
    backgroundColor: Color.white,
  },
  frameParent: {
    top: 98,
    left: 0,
    position: "absolute",
  },
  notification: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Notification1;
