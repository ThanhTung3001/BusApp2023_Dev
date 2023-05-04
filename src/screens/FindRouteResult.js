import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FindRouteResult = () => {
  return (
    <View style={[styles.findrouteresult, styles.findrouteresultLayout]}>
      <View
        style={[styles.findrouteresultChild, styles.findrouteresultPosition]}
      />
      <View
        style={[styles.findrouteresultInner, styles.findrouteresultPosition]}
      />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.frameLayout}>
          <View style={styles.frameWrapper}>
            <View
              style={[
                styles.download20230425t1048507Parent,
                styles.download20230425t1048507ParentFlexBox1,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>04</Text>
            </View>
          </View>
          <Text style={[styles.xeTiTrongContainer, styles.kmTypo]}>
            <Text
              style={styles.xeTiTrong}
            >{`Xe tới trong 3 phút tại trạm: `}</Text>
            <Text style={styles.khchSnGolden}>Khách sạn Golden</Text>
          </Text>
          <Text style={styles.pht}>
            <Text style={[styles.text1, styles.text1Typo]}>{`20
`}</Text>
            <Text style={styles.pht1}>phút</Text>
          </Text>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t105823349-1.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>1,1 km</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Group,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-2.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>11,2 km</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={styles.frameWrapper}>
            <View
              style={[
                styles.download20230425t1048507Container,
                styles.download20230425t1048507ParentFlexBox1,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>29</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Parent1,
                styles.download20230425t1048507ParentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>88</Text>
            </View>
          </View>
          <Text style={[styles.xeTiTrongContainer, styles.kmTypo]}>
            <Text style={styles.xeTiTrong}>{`Đón xe tại trạm: `}</Text>
            <Text style={styles.khchSnGolden}>Đội Cung</Text>
          </Text>
          <Text style={styles.pht}>
            <Text style={[styles.text1, styles.text1Typo]}>{`15
`}</Text>
            <Text style={styles.pht1}>phút</Text>
          </Text>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t105823349-1.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>567 m</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Group,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-2.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>10,5 km</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={styles.frameWrapper}>
            <View
              style={[
                styles.download20230425t1048507Parent3,
                styles.download20230425t1048507ParentFlexBox1,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>13</Text>
            </View>
          </View>
          <Text style={[styles.xeTiTrongContainer, styles.kmTypo]}>
            <Text style={styles.xeTiTrong}>{`Đón xe tại trạm: `}</Text>
            <Text style={styles.khchSnGolden}>Chợ Cống</Text>
          </Text>
          <Text style={styles.pht}>
            <Text style={[styles.text1, styles.text1Typo]}>{`20
`}</Text>
            <Text style={styles.pht1}>phút</Text>
          </Text>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t105823349-1.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>356m m</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Group,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-2.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>8,6 km</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={styles.frameWrapper}>
            <View style={styles.download20230425t1048507ParentFlexBox}>
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>01</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Parent6,
                styles.download20230425t1048507ParentFlexBox1,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>08</Text>
            </View>
          </View>
          <Text style={[styles.xeTiTrongContainer, styles.kmTypo]}>
            <Text style={styles.xeTiTrong}>{`Đón xe tại trạm: `}</Text>
            <Text style={styles.khchSnGolden}>Vòng xoay Nguyễn Thái Học</Text>
          </Text>
          <Text style={styles.pht}>
            <Text style={[styles.text1, styles.text1Typo]}>{`23
`}</Text>
            <Text style={styles.pht1}>phút</Text>
          </Text>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t105823349-1.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>1,7 km</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Group,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-2.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>11,2 km</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View style={styles.frameWrapper}>
            <View
              style={[
                styles.download20230425t1048507Parent8,
                styles.download20230425t1048507ParentFlexBox1,
              ]}
            >
              <Image
                style={styles.download20230425t1048507}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-1.png")}
              />
              <Text style={[styles.text, styles.textFlexBox]}>03</Text>
            </View>
          </View>
          <Text style={[styles.xeTiTrongContainer, styles.kmTypo]}>
            <Text style={styles.xeTiTrong}>{`Đón xe tại trạm: `}</Text>
            <Text style={styles.khchSnGolden}>Trường CĐ Du Lịch</Text>
          </Text>
          <Text style={styles.pht}>
            <Text style={[styles.text1, styles.text1Typo]}>{`20
`}</Text>
            <Text style={styles.pht1}>phút</Text>
          </Text>
          <View style={[styles.frameContainer, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t105823349-1.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>982 m</Text>
            </View>
            <View
              style={[
                styles.download20230425t1048507Group,
                styles.parentFlexBox,
              ]}
            >
              <Image
                style={styles.download20230425t1058233}
                resizeMode="cover"
                source={require("../assets/download--20230425t104850761-2.png")}
              />
              <Text style={[styles.km, styles.kmTypo]}>4,2 km</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Image
        style={styles.rectanglePosition}
        resizeMode="cover"
        source={require("../assets/rectangle-2018.png")}
      />
      <View
        style={[styles.download20220725t1102121Parent, styles.parentFlexBox]}
      >
        <Image
          style={[styles.download20220725t1102121, styles.ic24SyncIconLayout]}
          resizeMode="cover"
          source={require("../assets/download--20220725t110212197-1.png")}
        />
        <Text style={[styles.tmTuynXe, styles.text1Typo]}>Tìm tuyến xe</Text>
        <Image
          style={[styles.download20220725t1102121, styles.ic24SyncIconLayout]}
          resizeMode="cover"
          source={require("../assets/download--20230425t104156373-1.png")}
        />
      </View>
      <View style={[styles.timKiemParent, styles.parentPosition]}>
        <View style={styles.timLayout}>
          <Image
            style={styles.download20230425t1058233}
            resizeMode="cover"
            source={require("../assets/download--20220401t171724341.png")}
          />
          <Text style={[styles.nguynHu, styles.kmTypo]}>Nguyễn Huệ</Text>
        </View>
        <View style={[styles.timKiem1, styles.timLayout]}>
          <Image
            style={styles.download20230425t1058233}
            resizeMode="cover"
            source={require("../assets/download--20220401t1717243411.png")}
          />
          <Text style={[styles.nguynHu, styles.kmTypo]}>Lê Duẩn</Text>
        </View>
      </View>
      <View
        style={[styles.timKiem2, styles.download20230425t1048507ParentFlexBox1]}
      >
        <Image
          style={styles.ic24SyncIconLayout}
          resizeMode="cover"
          source={require("../assets/ic24sync.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  findrouteresultLayout: {
    height: height,
    backgroundColor: Color.white,
  },
  findrouteresultPosition: {
    width: width,
    left: 0,
    // position: "absolute",
  },
  frameIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  downloadLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  download20230425t1048507ParentFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textFlexBox: {
    textAlign: "justify",
    color: Color.white,
  },
  kmTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  text1Typo: {
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    borderStyle: "solid",
    width: width,
  },
  download20230425t1048507ParentFlexBox: {
    backgroundColor: Color.cornflowerblue_100,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    height: 30,
  },
  rectanglePosition: {
    height: 190,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ic24SyncIconLayout: {
    height: 24,
    width: 24,
  },
  timLayout: {
    padding: Padding.p_sm,
    height: 38,
    backgroundColor: Color.chocolate,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    flexDirection: "row",
    width: width,
  },
  findrouteresultChild: {
    top: 0,
    width: width,
    height: 812,
    backgroundColor: Color.white,
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
    height: 34,
  },
  findrouteresultItem: {
    height: 724,
    top: 88,
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
  findrouteresultInner: {
    top: 190,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 622,
    backgroundColor: Color.white,
  },
  download20230425t1048507: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text: {
    lineHeight: 22,
    marginLeft: 5,
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
    textAlign: "justify",
    fontSize: FontSize.size_sm,
  },
  download20230425t1048507Parent: {
    backgroundColor: Color.title,
    width: 60,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    height: 30,
  },
  frameWrapper: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  xeTiTrong: {
    color: Color.darkslategray_100,
  },
  khchSnGolden: {
    color: Color.title,
  },
  xeTiTrongContainer: {
    top: 68,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 18,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_lg,
  },
  pht1: {
    fontFamily: FontFamily.mulishRegular,
    fontSize: FontSize.size_sm,
  },
  pht: {
    top: 1,
    right: 0,
    textAlign: "center",
    color: Color.darkslategray_100,
    lineHeight: 18,
    display: 'flex',
    justifyContent: 'space-between'
    // position: "absolute",
  },
  download20230425t1058233: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  km: {
    color: Color.gray_100,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 18,
    marginLeft: 5,
  },
  download20230425t1048507Group: {
    marginLeft: 20,
  },
  frameContainer: {
    top: 40,
    left: 0,
    position: "absolute",
  },
  download20230425t1048507Container: {
    backgroundColor: "#4ba2f1",
    width: 60,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    height: 30,
  },
  download20230425t1048507Parent1: {
    marginLeft: 20,
  },
  frameView: {
    marginTop: 10,
  },
  download20230425t1048507Parent3: {
    backgroundColor: "#48c9a2",
    width: 60,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    height: 30,
  },
  download20230425t1048507Parent6: {
    backgroundColor: "#799859",
    marginLeft: 20,
    width: 60,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    height: 30,
  },
  download20230425t1048507Parent8: {
    backgroundColor: "#ffa520",
    width: 60,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    height: 30,
  },
  frameParent: {
    top: 210,
  },
  rectangleView: {
    backgroundColor: Color.lightsalmon,
  },
  download20220725t1102121: {
    overflow: "hidden",
  },
  tmTuynXe: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    textAlign: "justify",
    color: Color.white,
  },
  download20220725t1102121Parent: {
    top: 44,
    justifyContent: "space-between",
    width: width,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  nguynHu: {
    width: 264,
    marginLeft: 10,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.mulishSemibold,
    fontWeight: "600",
  },
  timKiem1: {
    marginTop: 10,
  },
  timKiemParent: {
    top: 88,
  },
  timKiem2: {
    top: 116,
    left: 320,
    borderRadius: Border.br_161xl,
    padding: Padding.p_9xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  findrouteresult: {
    flex: 1,
    overflow: "hidden",
    width: width
  },
});

export default FindRouteResult;
