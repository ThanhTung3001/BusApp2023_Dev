import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ResponseFeedBack = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.responsefeedback, styles.iconLayout]}>
      <View
        style={[styles.responsefeedbackChild, styles.responsefeedbackPosition]}
      />
      <View
        style={[
          styles.responsefeedbackItem,
          styles.responsefeedbackItemShadowBox,
        ]}
      />
      <View
        style={[styles.download20220725t1102121Parent, styles.parentFlexBox]}
      >
        <Pressable
          style={[styles.download20220725t1102121, styles.basicssearchLayout]}
          onPress={() => navigation.navigate("MenuLeft")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/download--20220725t110212197-11.png")}
          />
        </Pressable>
        <Text style={styles.phnHigp}>Phản hồi/Góp ý</Text>
        <View style={[styles.basicssearch, styles.basicssearchSpaceBlock]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.frameParent, styles.parentPosition]}
        onPress={() => navigation.navigate("ResponseFeedBackDetail")}
      >
        <View style={styles.anUongItem16Parent}>
          <View style={[styles.anUongItem16, styles.uongItemPosition]}>
            <View style={styles.imageParent}>
              <Image
                style={[styles.imageIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <View
                style={[styles.frameWrapper, styles.basicssearchSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    10/04/2023, 08:23
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={[styles.trmXeBut, styles.text1FlexBox]}>
                Trạm xe buýt ở đường Đội Cung không có mái che mưa nắng cho
                khách
              </Text>
              <View
                style={[
                  styles.download20230414t1109470Parent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={[
                    styles.download20230414t1109470,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/download--20230414t110947038-1.png")}
                />
                <Text style={[styles.ngICung, styles.textTypo1]}>
                  Đường Đội Cung, phường Phú Hội, Tp Huế
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.download20230414t1112599Parent,
              styles.imageIconLayout,
            ]}
          >
            <Image
              style={[styles.download20230414t1109470, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/download--20230414t111259928-1.png")}
            />
            <Text style={[styles.text1, styles.text1FlexBox]}>3</Text>
          </View>
        </View>
        <View style={[styles.anUongItem16Group, styles.uongSpaceBlock]}>
          <View style={[styles.anUongItem16, styles.uongItemPosition]}>
            <View style={styles.imageParent}>
              <Image
                style={[styles.imageIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image1.png")}
              />
              <View
                style={[styles.frameWrapper, styles.basicssearchSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    01/04/2023, 07:15
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={[styles.trmXeBut, styles.text1FlexBox]}>
                Tuyến xe buýt số 6 đi từ Tố Hữu đến bến xe phía Bắc thường xuyên
                đến trễ
              </Text>
              <View
                style={[
                  styles.download20230414t1109470Parent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={[
                    styles.download20230414t1109470,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/download--20230414t110947038-1.png")}
                />
                <Text style={[styles.ngICung, styles.textTypo1]}>
                  Bến xe phía Bắc
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.download20230414t1112599Parent,
              styles.imageIconLayout,
            ]}
          >
            <Image
              style={[styles.download20230414t1109470, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/download--20230414t111259928-1.png")}
            />
            <Text style={[styles.text1, styles.text1FlexBox]}>2</Text>
          </View>
        </View>
        <View style={[styles.anUongItem16Group, styles.uongSpaceBlock]}>
          <View style={[styles.anUongItem16, styles.uongItemPosition]}>
            <View style={styles.imageParent}>
              <Image
                style={[styles.imageIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image2.png")}
              />
              <View
                style={[styles.frameWrapper, styles.basicssearchSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    30/04/2023, 16:39
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={[styles.trmXeBut, styles.text1FlexBox]}>
                Xe buýt dừng đỗ ko đúng trạm, trả khách giữa đường
              </Text>
              <View
                style={[
                  styles.download20230414t1109470Parent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={[
                    styles.download20230414t1109470,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/download--20230414t110947038-1.png")}
                />
                <Text style={[styles.ngICung, styles.textTypo1]}>
                  Đường Lê Lợi, thành phố Huế
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.download20230414t1112599Parent,
              styles.imageIconLayout,
            ]}
          >
            <Image
              style={[styles.download20230414t1109470, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/download--20230414t111259928-1.png")}
            />
            <Text style={[styles.text1, styles.text1FlexBox]}>1</Text>
          </View>
        </View>
        <View style={[styles.anUongItem16Parent1, styles.uongSpaceBlock]}>
          <View style={[styles.anUongItem163, styles.uongItemPosition]}>
            <View style={styles.imageParent}>
              <Image
                style={[styles.imageIcon, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image3.png")}
              />
              <View
                style={[styles.frameWrapper, styles.basicssearchSpaceBlock]}
              >
                <View style={[styles.wrapper, styles.parentFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>
                    22/03/2023, 13:46
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={[styles.trmXeBut, styles.text1FlexBox]}>
                Xe buýt tuyến số 2 thường xuyên vượt ẩu, lấn làn
              </Text>
              <View
                style={[
                  styles.download20230414t1109470Parent,
                  styles.parentFlexBox,
                ]}
              >
                <Image
                  style={[
                    styles.download20230414t1109470,
                    styles.vectorIconLayout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/download--20230414t110947038-1.png")}
                />
                <Text style={[styles.ngICung, styles.textTypo1]}>
                  Đường An Dương Vương, thành phố Huế
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.download20230414t1112599Parent,
              styles.imageIconLayout,
            ]}
          >
            <Image
              style={[styles.download20230414t1109470, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/download--20230414t111259928-1.png")}
            />
            <Text style={[styles.text1, styles.text1FlexBox]}>3</Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.download20230414t1337015,
          styles.responsefeedbackItemShadowBox,
        ]}
        onPress={() => navigation.navigate("SendFeedBack")}
      >
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  responsefeedbackPosition: {
    width: 375,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  responsefeedbackItemShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  basicssearchLayout: {
    width: 24,
    height: 24,
  },
  basicssearchSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  vectorIconLayout: {
    width: 16,
    height: 16,
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  uongItemPosition: {
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  imageIconLayout: {
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
  },
  text1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo1: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    flex: 1,
  },
  uongSpaceBlock: {
    marginTop: 15,
    width: 343,
  },
  responsefeedbackChild: {
    position: "absolute",
    height: 812,
  },
  responsefeedbackItem: {
    shadowColor: "#f1f1f1",
    shadowRadius: 2,
    elevation: 2,
    height: 88,
    width: 375,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  download20220725t1102121: {
    height: 24,
  },
  phnHigp: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    textAlign: "justify",
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  vectorIcon: {
    display: "none",
    height: 16,
  },
  basicssearch: {
    borderRadius: Border.br_141xl,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "center",
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
  imageIcon: {
    zIndex: 0,
    height: 170,
    width: 343,
    left: 0,
    top: 0,
    borderRadius: Border.br_9xs,
  },
  text: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    flex: 1,
  },
  wrapper: {
    width: 321,
    alignItems: "center",
  },
  frameWrapper: {
    top: 144,
    height: 26,
    paddingHorizontal: Padding.p_3xs,
    zIndex: 1,
    marginTop: 10,
    justifyContent: "center",
    width: 343,
    left: 0,
    position: "absolute",
  },
  imageParent: {
    height: 170,
  },
  trmXeBut: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
    height: 44,
    alignSelf: "stretch",
    color: Color.text,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    display: "flex",
  },
  download20230414t1109470: {
    height: 16,
    overflow: "hidden",
  },
  ngICung: {
    color: Color.dimgray,
    marginLeft: 8,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    textAlign: "justify",
  },
  download20230414t1109470Parent: {
    alignSelf: "stretch",
    marginTop: 10,
    alignItems: "center",
  },
  content: {
    height: 74,
    alignSelf: "stretch",
    marginTop: 10,
  },
  anUongItem16: {
    paddingBottom: Padding.p_3xs,
  },
  text1: {
    fontWeight: "600",
    fontFamily: FontFamily.mulishSemibold,
    width: 9,
    marginLeft: 5,
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    height: 16,
  },
  download20230414t1112599Parent: {
    top: 5,
    left: 296,
    backgroundColor: Color.gray_400,
    width: 42,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  anUongItem16Parent: {
    height: 264,
    width: 343,
  },
  anUongItem16Group: {
    height: 264,
  },
  anUongItem163: {
    paddingBottom: Padding.p_mini,
  },
  anUongItem16Parent1: {
    height: 269,
  },
  frameParent: {
    top: 103,
    height: 675,
  },
  groupIcon: {
    width: 25,
    height: 24,
  },
  download20230414t1337015: {
    top: 723,
    left: 304,
    borderRadius: Border.br_161xl,
    backgroundColor: Color.title1,
    shadowColor: "rgba(0, 158, 82, 0.4)",
    shadowRadius: 5,
    elevation: 5,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  responsefeedback: {
    overflow: "hidden",
    height: 812,
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default ResponseFeedBack;
