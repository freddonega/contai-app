import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, StyleSheet } from "react-native";
import "../global.css";
import colors from "@/colors";
import { StatusBar } from "expo-status-bar";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    InterThin: require("../assets/fonts/Inter-Thin.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter-ExtraBold.ttf"),
    InterExtraLight: require("../assets/fonts/Inter-ExtraLight.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.contai.navy },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(app)" />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}
