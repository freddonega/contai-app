import { View, Text, ScrollView } from "react-native";

import { CustomLineChart } from "@/components/CustomLineChart";

export default function Home() {
  return (
    <ScrollView className="flex-1">
      <Text className="font-interBold text-white text-2xl mb-10">
        Gerencie suas transações financeiras
      </Text>
      <Text className="text-white font-interRegular text-lg mb-4">
        Balanço de maio/2024
      </Text>
      <Text className="text-white font-interBold text-3xl mb-4">R$2.943</Text>
      <Text className="text-white font-interRegular text-lg mb-10">
        Últimos 30 dias <Text className="text-contai-green">+12%</Text>
      </Text>

      <CustomLineChart />
      <Text className="text-white font-interBold text-lg mt-10 mb-4">
        Julho/2024
      </Text>
      <View className="flex flex-row justify-between items-center  border-b border-contai-darkBlue py-2">
        <View className="flex flex-col">
          <Text className="text-white font-interSemiBold text-md">
            META Plataformas
          </Text>
          <Text className="text-contai-red font-interRegular text-xs">
            - R$1.200,00
          </Text>
        </View>
        <Text className="text-white font-interRegular text-md">R$1.200,00</Text>
      </View>

      <View className="flex flex-row justify-between items-center border-b border-contai-darkBlue py-2">
        <View className="flex flex-col">
          <Text className="text-white font-interSemiBold text-md">AMD</Text>
          <Text className="text-contai-green font-interRegular text-xs">
            + R$200,00
          </Text>
        </View>
        <Text className="text-white font-interRegular text-md">R$200,00</Text>
      </View>

      <View className="flex flex-row justify-between items-center  border-b border-contai-darkBlue py-2">
        <View className="flex flex-col">
          <Text className="text-white font-interSemiBold text-md">
            Coinbase
          </Text>
          <Text className="text-contai-green font-interRegular text-xs">
            + R$350,43
          </Text>
        </View>
        <Text className="text-white font-interRegular text-md">R$350,43</Text>
      </View>
    </ScrollView>
  );
}
