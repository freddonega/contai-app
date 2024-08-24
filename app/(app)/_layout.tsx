import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import colors from "@/colors";
import { View, Text } from "react-native";
import { Logo } from "@/components/Logo";

export default function RootLayout() {
  const Header = () => {
    return (
      <View className="mb-10">
        <Logo />
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        header: Header,
        tabBarActiveTintColor: colors.contai.lightBlue,
        tabBarInactiveTintColor: colors.contai.blue,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.contai.darkBlue,
          borderTopColor: colors.contai.darkBlue,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.contai.navy,
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="moviments"
        options={{
          title: "Movimentos",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="dollar" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="th-large" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
