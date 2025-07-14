import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function ProfileHeader() {
  return (
    <View className="px-6 py-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
      <View className="flex flex-col items-center">
        {/* Profile Picture */}
        <View className="relative mb-4">
          <View className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
            <Ionicons name="person" size={40} color="#6b7280" />
          </View>
          <Pressable className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Ionicons name="camera" size={16} color="white" />
          </Pressable>
        </View>
        
        {/* User Info */}
        <Text
          className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          John Doe
        </Text>
        <Text
          className="text-base text-center text-gray-600 dark:text-gray-300 mb-2"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Software Developer
        </Text>
        <Text
          className="text-sm text-center text-gray-500 dark:text-gray-400"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          📍 San Francisco, CA
        </Text>
      </View>
    </View>
  );
} 