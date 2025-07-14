import React from "react";
import { Text, View, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SettingsItem } from './SettingsItem';

export function AppInfoSection() {
  return (
    <View className="bg-white dark:bg-gray-800 mt-4 mx-4 rounded-lg">
      <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <Text
          className="text-lg font-semibold text-gray-900 dark:text-white"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          App Information
        </Text>
      </View>
      
      <SettingsItem
        title="Help & Support"
        subtitle="Get help or contact support"
        icon="help-circle-outline"
        iconColor="#f97316"
        onPress={() => Alert.alert('Help', 'Navigate to help center')}
      />
      
      <SettingsItem
        title="Privacy Policy"
        subtitle="Read our privacy policy"
        icon="document-text-outline"
        iconColor="#6b7280"
        onPress={() => Alert.alert('Privacy Policy', 'Open privacy policy')}
      />
      
      <SettingsItem
        title="Terms of Service"
        subtitle="Read our terms of service"
        icon="document-outline"
        iconColor="#6b7280"
        onPress={() => Alert.alert('Terms', 'Open terms of service')}
      />
      
      <View className="px-4 py-4 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
            <Ionicons name="information-circle-outline" size={20} color="#6b7280" />
          </View>
          <View>
            <Text
              className="text-base text-gray-900 dark:text-white"
              style={{ fontFamily: "PlusJakartaSans_500Medium" }}
            >
              App Version
            </Text>
            <Text
              className="text-sm text-gray-500 dark:text-gray-400"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              v1.0.0 (Build 100)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
} 