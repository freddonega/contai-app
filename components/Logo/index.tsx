import { View, Text } from "react-native";

export const Logo = ({ ...rest }) => {
  return (
    <View {...rest}>
      <View className="flex flex-row animate-pulse">
        <Text className="font-interBold text-contai-white text-3xl">Cont</Text>
        <Text className="font-interBold text-contai-lightBlue text-3xl">
          aí!
        </Text>
      </View>
    </View>
  );
};
