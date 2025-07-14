import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface SettingsItemProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  onPress: () => void;
  titleColor?: string;
  showDivider?: boolean;
}

export function SettingsItem({ 
  title, 
  subtitle, 
  icon, 
  iconColor, 
  onPress, 
  titleColor, 
  showDivider = true 
}: SettingsItemProps) {
  return (
    <>
      <Pressable 
        className="px-4 py-4 flex flex-row items-center active:bg-gray-50 dark:active:bg-gray-700"
        onPress={onPress}
      >
        <View 
          className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        
        <View className="flex-1">
          <Text
            className={`text-base ${titleColor ? '' : 'text-gray-900 dark:text-white'}`}
            style={{ 
              fontFamily: "PlusJakartaSans_500Medium",
              color: titleColor || undefined
            }}
          >
            {title}
          </Text>
          <Text
            className="text-sm text-gray-500 dark:text-gray-400"
            style={{ fontFamily: "PlusJakartaSans_400Regular" }}
          >
            {subtitle}
          </Text>
        </View>
        
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color="#9ca3af" 
        />
      </Pressable>
      {showDivider && <View className="h-px bg-gray-200 dark:bg-gray-700 ml-16" />}
    </>
  );
} 