import React from "react";
import { Text, View } from "react-native";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <View className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <Text className="text-3xl mb-4">{icon}</Text>
      <Text
        className="text-lg font-semibold text-center mb-2 text-gray-900 dark:text-white"
        style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
      >
        {title}
      </Text>
      <Text
        className="text-sm text-center text-gray-600 dark:text-gray-300"
        style={{ fontFamily: "PlusJakartaSans_400Regular" }}
      >
        {description}
      </Text>
    </View>
  );
} 