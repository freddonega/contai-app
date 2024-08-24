import React from "react";
import { useRouter } from "expo-router";

import { Text, View, TouchableOpacity } from "react-native";
import { Logo } from "@/components/Logo";

export default function App() {
  const router = useRouter();
  const signIn = async () => {
    router.push("/(app)");
  };
  return (
    <View className="flex-1 items-center justify-end p-4 py-20">
      <Logo className="flex-1 self-stretch justify-center items-center" />
      <TouchableOpacity
        onPress={signIn}
        className="bg-contai-lightBlue p-2 items-center rounded w-full"
      >
        <Text className="font-interBold text-white">Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signIn}
        className="bg-contai-white p-2 items-center rounded w-full mt-5"
      >
        <Text className="font-interBold text-contai-lightBlue">Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
