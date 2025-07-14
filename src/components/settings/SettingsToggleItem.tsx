import React from "react";
import { Text, View, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface SettingsToggleItemProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  showDivider?: boolean;
}

export function SettingsToggleItem({ 
  title, 
  subtitle, 
  icon, 
  iconColor, 
  isEnabled, 
  onToggle, 
  showDivider = true 
}: SettingsToggleItemProps) {
  return (
    <>
      <View className="px-4 py-4 flex flex-row items-center">
        <View 
          className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
          style={{ backgroundColor: `${iconColor}20` }}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        
        <View className="flex-1">
          <Text
            className="text-base text-gray-900 dark:text-white"
            style={{ fontFamily: "PlusJakartaSans_500Medium" }}
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
        
        <Switch
          value={isEnabled}
          onValueChange={onToggle}
          trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
        />
      </View>
      {showDivider && <View className="h-px bg-gray-200 dark:bg-gray-700 ml-16" />}
    </>
  );
} 