import React from "react";
import { Text, View } from "react-native";
import { SettingsToggleItem } from './SettingsToggleItem';

interface PreferencesSectionProps {
  notificationsEnabled: boolean;
  setNotificationsEnabled: (value: boolean) => void;
  darkModeEnabled: boolean;
  setDarkModeEnabled: (value: boolean) => void;
  locationEnabled: boolean;
  setLocationEnabled: (value: boolean) => void;
}

export function PreferencesSection({
  notificationsEnabled,
  setNotificationsEnabled,
  darkModeEnabled,
  setDarkModeEnabled,
  locationEnabled,
  setLocationEnabled,
}: PreferencesSectionProps) {
  return (
    <View className="bg-white dark:bg-gray-800 mt-4 mx-4 rounded-lg">
      <View className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <Text
          className="text-lg font-semibold text-gray-900 dark:text-white"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          Preferences
        </Text>
      </View>
      
      <SettingsToggleItem
        title="Push Notifications"
        subtitle="Receive notifications for updates"
        icon="notifications-outline"
        iconColor="#8b5cf6"
        isEnabled={notificationsEnabled}
        onToggle={setNotificationsEnabled}
      />
      
      <SettingsToggleItem
        title="Dark Mode"
        subtitle="Switch between light and dark theme"
        icon="moon-outline"
        iconColor="#6366f1"
        isEnabled={darkModeEnabled}
        onToggle={setDarkModeEnabled}
      />
      
      <SettingsToggleItem
        title="Location Services"
        subtitle="Allow location access for better experience"
        icon="location-outline"
        iconColor="#ef4444"
        isEnabled={locationEnabled}
        onToggle={setLocationEnabled}
        showDivider={false}
      />
    </View>
  );
} 