import React, { useState } from "react";
import { Text, View, ScrollView, Pressable, Switch, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function SettingsPage() {
  const colorScheme = useColorScheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(colorScheme === 'dark');
  const [locationEnabled, setLocationEnabled] = useState(false);
  
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <UserAccountSection />
      <PreferencesSection
        notificationsEnabled={notificationsEnabled}
        setNotificationsEnabled={setNotificationsEnabled}
        darkModeEnabled={darkModeEnabled}
        setDarkModeEnabled={setDarkModeEnabled}
        locationEnabled={locationEnabled}
        setLocationEnabled={setLocationEnabled}
      />
      <AppInfoSection />
      <DangerZoneSection />
    </ScrollView>
  );
}

function UserAccountSection() {
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

interface PreferencesSectionProps {
  notificationsEnabled: boolean;
  setNotificationsEnabled: (value: boolean) => void;
  darkModeEnabled: boolean;
  setDarkModeEnabled: (value: boolean) => void;
  locationEnabled: boolean;
  setLocationEnabled: (value: boolean) => void;
}

function PreferencesSection({
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

function AppInfoSection() {
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

function DangerZoneSection() {
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

interface SettingsItemProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  onPress: () => void;
  titleColor?: string;
  showDivider?: boolean;
}

function SettingsItem({ 
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

interface SettingsToggleItemProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  showDivider?: boolean;
}

function SettingsToggleItem({ 
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