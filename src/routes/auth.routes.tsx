import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { SignIn } from "@screens/Signin";
import { SignUp } from "@screens/Signup";
import { Home } from "@screens/Home";
import React from "react";
import { useTheme } from "native-base";
import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/chat (2).svg";
import ProfilePhotoSvg from "@assets/profile.svg";
import ChatBot from "@screens/ChatBot";
import { Profile } from "@screens/Profile";

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  Home: undefined;
  Chat: undefined;
  Profile: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutes>();

export function AuthRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="Chat"
        component={ChatBot}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfilePhotoSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
    </Navigator>
  );
}
