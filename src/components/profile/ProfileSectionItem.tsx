import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface ProfileSectionItemProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

export function ProfileSectionItem({ title, icon, color }: ProfileSectionItemProps) {
  return (
    <Pressable className="flex flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 active:bg-gray-50 dark:active:bg-gray-700">
      <View 
        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
        style={{ backgroundColor: `${color}20` }}
      >
        <Ionicons name={icon} size={20} color={color} />
      </View>
      
      <View className="flex-1">
        <Text
          className="text-base text-gray-900 dark:text-white"
          style={{ fontFamily: "PlusJakartaSans_500Medium" }}
        >
          {title}
        </Text>
      </View>
      
      <Ionicons 
        name="chevron-forward" 
        size={20} 
        color="#9ca3af" 
      />
    </Pressable>
  );
} 