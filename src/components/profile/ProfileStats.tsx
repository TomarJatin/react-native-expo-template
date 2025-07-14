import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function ProfileStats() {
  const stats = [
    { label: 'Projects', value: '12', icon: 'folder' as const },
    { label: 'Followers', value: '1.2K', icon: 'people' as const },
    { label: 'Following', value: '324', icon: 'person-add' as const },
  ];

  return (
    <View className="px-6 py-6 bg-white dark:bg-gray-900">
      <View className="flex flex-row justify-around">
        {stats.map((stat, index) => (
          <View key={index} className="flex flex-col items-center">
            <View className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
              <Ionicons name={stat.icon} size={20} color="#3b82f6" />
            </View>
            <Text
              className="text-xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              {stat.value}
            </Text>
            <Text
              className="text-sm text-gray-600 dark:text-gray-300"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {stat.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
} 