const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import FindRouteResult from "./src/screens/ResultRoute";
import FindRoute from "./src/screens/FindRoute";
import ChangePasswordSuccess from "./src/screens/ChangePasswordSuccess";
// import ForgotPassword from "./src/screens/ForgotPassword";

import SendFeedBack from "./src/screens/SendFeedBack";
import ResponseFeedBackDetail from "./src/screens/ResponseFeedBackDetail";
import ResponseFeedBack from "./src/screens/ResponseFeedBack";
import AppInfo from "./src/screens/AppInfo";
import Notification1 from "./src/screens/Notification1";
import AllowNotitfication from "./src/screens/AllowNotitfication";
import HomePage from "./src/screens/HomePage";
import SignOut from "./src/screens/SignOut";
import ExpandMap from "./src/screens/ExpandMap";
import AccountInfo from "./src/screens/AccountInfo";
import MenuLeft from "./src/screens/MenuLeft";
import FeedBack from "./src/screens/FeedBack";
import ShareLocation from "./src/screens/ShareLocation";
import SignIn from "./src/screens/SignIn";
import OnboardingLast from "./src/screens/OnboardingLast";
import OnboardingThird from "./src/screens/OnboardingThird";
import OnboardingSecond from "./src/screens/OnboardingSecond";
import OnboardingFirst from "./src/screens/OnboardingFirst";
import Splash from "./src/screens/SplashScreen/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import FindRouteResult from "./src/screens/FindRouteResult";
import ForgotPassword from "./src/screens/ForgotPassword";
// import ForgotPassword from "./src/screens/Forgot/ForgotPassword";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
