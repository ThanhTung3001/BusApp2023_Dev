import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ResponseFeedBackDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.responsefeedbackdetail, styles.iconLayout]}>
      <View
        style={[
          styles.responsefeedbackdetailChild,
          styles.responsefeedbackdetailPosition,
        ]}
      />
      <View
        style={[
          styles.responsefeedbackdetailItem,
          styles.responsefeedbackdetailPosition,
        ]}
      />
      <View
        style={[styles.download20220725t1102121Parent, styles.wrapperFlexBox]}
      >
        <Pressable
          style={styles.download20220725t1102121}
          onPress={() => navigation.navigate("ResponseFeedBack")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/download--20220725t110212197-11.png")}
          />
        </Pressable>
        <Text style={styles.phnHigp}>Phản hồi/Góp ý</Text>
        <Image
          style={styles.download20230414t1409134}
          resizeMode="cover"
          source={require("../assets/download--20230414t140913484-1.png")}
        />
      </View>
      <View style={[styles.anUongItem16, styles.anUongItem16FlexBox]}>
        <View style={styles.imageParent}>
          <Image
            style={[styles.imageIcon, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/image.png")}
          />
          <View style={[styles.frameWrapper, styles.anUongItem16FlexBox]}>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>
                10/04/2023, 08:23
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentParent}>
          <View style={styles.content}>
            <Text style={[styles.trmXeBut, styles.butTypo]}>
              Trạm xe buýt ở đường Đội Cung không có mái che mưa nắng cho khách
            </Text>
            <View
              style={[
                styles.download20230414t1109470Parent,
                styles.trmXeButFlexBox,
              ]}
            >
              <Image
                style={styles.download20230414t1109470}
                resizeMode="cover"
                source={require("../assets/download--20230414t110947038-1.png")}
              />
              <Text style={[styles.ngICung, styles.textTypo]}>
                Đường Đội Cung, phường Phú Hội, Tp Huế
              </Text>
            </View>
          </View>
          <Text style={[styles.trnXeBut, styles.butTypo]}>
            Trên xe buýt hiện nay, đều có hệ thống loa phát thanh thông báo điểm
            dừng, hành khách chúng tôi dễ dàng có thể nhận biết điểm đến. Trước
            đây khi không có hệ thống loa thông báo điểm dừng, không ít lần tôi
            đi quá vị trí cần đến, lại phải bắt một xe buýt khác quay lại, rất
            mất thời gian. một số tuyến xe buýt tài xế không dừng đỗ khi đến
            điểm dừng, cửa lên xuống không được mở đủ hay hành khách chưa kịp
            lên xe đã cho xe di chuyển, nhân viên thu vé tỏ thái độ thiếu hòa
            nhã…
          </Text>
        </View>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-374.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-373.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-374.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  responsefeedbackdetailPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  anUongItem16FlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  imageIconPosition: {
    left: 0,
    width: 343,
  },
  textTypo: {
    fontFamily: FontFamily.mulishMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "justify",
    flex: 1,
  },
  butTypo: {
    fontSize: FontSize.size_base,
    color: Color.text,
  },
  trmXeButFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  responsefeedbackdetailChild: {
    height: 812,
  },
  responsefeedbackdetailItem: {
    shadowColor: "#f1f1f1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    height: 88,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  download20220725t1102121: {
    width: 24,
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
  download20230414t1409134: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  download20220725t1102121Parent: {
    top: 51,
    justifyContent: "space-between",
    width: 343,
    left: 16,
    position: "absolute",
  },
  imageIcon: {
    borderRadius: Border.br_9xs,
    zIndex: 0,
    height: 170,
    width: 343,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.white,
  },
  wrapper: {
    width: 321,
  },
  frameWrapper: {
    top: 144,
    height: 26,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    zIndex: 1,
    marginTop: 10,
    width: 343,
    left: 0,
  },
  imageParent: {
    height: 170,
  },
  trmXeBut: {
    lineHeight: 22,
    textAlign: "left",
    display: "flex",
    height: 44,
    alignSelf: "stretch",
    alignItems: "center",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  download20230414t1109470: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  ngICung: {
    color: Color.dimgray,
    marginLeft: 8,
  },
  download20230414t1109470Parent: {
    marginTop: 10,
    flexDirection: "row",
  },
  content: {
    height: 74,
    width: 343,
  },
  trnXeBut: {
    lineHeight: 24,
    fontFamily: FontFamily.mulishRegular,
    height: 269,
    marginTop: 20,
    textAlign: "justify",
    width: 343,
  },
  contentParent: {
    marginTop: 10,
  },
  anUongItem16: {
    top: 103,
    paddingBottom: Padding.p_3xs,
    left: 16,
    backgroundColor: Color.white,
    justifyContent: "center",
  },
  frameItem: {
    marginLeft: 6,
  },
  ellipseParent: {
    top: 257,
    left: 172,
    flexDirection: "row",
    position: "absolute",
  },
  responsefeedbackdetail: {
    overflow: "hidden",
    height: 812,
    flex: 1,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ResponseFeedBackDetail;
