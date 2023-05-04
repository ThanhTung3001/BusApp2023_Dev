import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const SendFeedBack = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sendfeedback, styles.iconLayout]}>
      <View style={[styles.sendfeedbackChild, styles.sendfeedbackPosition]} />
      <View style={[styles.sendfeedbackItem, styles.sendfeedbackPosition]} />
      <View style={styles.download20220725t1102121Parent}>
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
        <Text style={[styles.phnHigp, styles.giTypo]}>Phản hồi/Góp ý</Text>
        <View style={[styles.basicssearch, styles.giWrapperFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <Text style={styles.giPhnHigp}>
        Gửi phản hồi/Góp ý về chất lượng xe buýt
      </Text>
      <Text style={[styles.nhpNiDung, styles.thmHnhNhTypo]}>
        Nhập nội dung mà bạn muốn góp ý vào đây...
      </Text>
      <Image
        style={styles.download852}
        resizeMode="cover"
        source={require("../assets/download-85-2.png")}
      />
      <Pressable
        style={[styles.giWrapper, styles.giWrapperFlexBox]}
        onPress={() => navigation.navigate("ResponseFeedBack")}
      >
        <Text style={[styles.gi, styles.giTypo]}>Gửi</Text>
      </Pressable>
      <View style={styles.sendfeedbackInner} />
      <View style={[styles.download352Parent, styles.giWrapperPosition]}>
        <View style={styles.downloadBorder}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.thmHnhNh, styles.thmHnhNhTypo]}>
            Thêm hình ảnh
          </Text>
        </View>
        <View style={[styles.download353, styles.downloadBorder]}>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.thmHnhNh, styles.thmHnhNhTypo]}>Thêm video</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  sendfeedbackPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  giTypo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  giWrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  thmHnhNhTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
  },
  giWrapperPosition: {
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  downloadBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    height: 65,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  sendfeedbackChild: {
    height: 812,
  },
  sendfeedbackItem: {
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
  },
  basicssearchLayout: {
    height: 24,
    width: 24,
  },
  phnHigp: {
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
    height: 24,
    width: 24,
  },
  download20220725t1102121Parent: {
    top: 51,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  giPhnHigp: {
    top: 298,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 24,
    color: Color.text,
    width: 343,
    left: 16,
    position: "absolute",
  },
  nhpNiDung: {
    top: 347,
    left: 26,
    color: "#8c8c8c",
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  download852: {
    top: 118,
    left: 113,
    width: 150,
    height: 150,
    position: "absolute",
    overflow: "hidden",
  },
  gi: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "left",
  },
  giWrapper: {
    top: 588,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.coral_100,
    height: 46,
    flexDirection: "row",
    width: 343,
    left: 16,
    position: "absolute",
  },
  sendfeedbackInner: {
    top: 337,
    height: 134,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupIcon: {
    height: 23,
    width: 30,
  },
  thmHnhNh: {
    marginTop: 5,
    textAlign: "left",
    color: Color.text,
  },
  groupIcon1: {
    height: 18,
    width: 30,
  },
  download353: {
    marginLeft: 10,
  },
  download352Parent: {
    top: 483,
  },
  sendfeedback: {
    height: 812,
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default SendFeedBack;
