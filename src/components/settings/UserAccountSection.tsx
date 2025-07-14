import React from "react";
import { Text, View, Alert } from "react-native";
import { SettingsItem } from './SettingsItem';

export function UserAccountSection() {
  return (
    <View className="bg-white dark:bg-gray-800 mt-4 mx-4 rounded-lg">
      <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <Text
          className="text-lg font-semibold text-gray-900 dark:text-white"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          Account
        </Text>
      </View>
      
      <SettingsItem
        title="Personal Information"
        subtitle="Update your name, email, and profile"
        icon="person-outline"
        iconColor="#3b82f6"
        onPress={() => Alert.alert('Personal Information', 'Navigate to personal info settings')}
      />
      
      <SettingsItem
        title="Password & Security"
        subtitle="Change password and security settings"
        icon="lock-closed-outline"
        iconColor="#f59e0b"
        onPress={() => Alert.alert('Security', 'Navigate to security settings')}
      />
      
      <SettingsItem
        title="Billing & Payments"
        subtitle="Manage your subscription and payments"
        icon="card-outline"
        iconColor="#10b981"
        onPress={() => Alert.alert('Billing', 'Navigate to billing settings')}
        showDivider={false}
      />
    </View>
  );
} 