import React from "react";
import { Text, View, Alert } from "react-native";
import { SettingsItem } from './SettingsItem';

export function DangerZoneSection() {
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Out', style: 'destructive', onPress: () => Alert.alert('Signed Out', 'You have been signed out') },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'This action cannot be undone. Are you sure you want to delete your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => Alert.alert('Account Deleted', 'Your account has been deleted') },
      ]
    );
  };

  return (
    <View className="bg-white dark:bg-gray-800 mt-4 mx-4 rounded-lg mb-6">
      <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <Text
          className="text-lg font-semibold text-red-600 dark:text-red-400"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          Danger Zone
        </Text>
      </View>
      
      <SettingsItem
        title="Sign Out"
        subtitle="Sign out of your account"
        icon="log-out-outline"
        iconColor="#ef4444"
        onPress={handleSignOut}
        titleColor="#ef4444"
      />
      
      <SettingsItem
        title="Delete Account"
        subtitle="Permanently delete your account and data"
        icon="trash-outline"
        iconColor="#dc2626"
        onPress={handleDeleteAccount}
        titleColor="#dc2626"
        showDivider={false}
      />
    </View>
  );
} 