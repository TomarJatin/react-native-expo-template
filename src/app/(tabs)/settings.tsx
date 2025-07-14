import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useColorScheme } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  UserAccountSection, 
  PreferencesSection, 
  AppInfoSection, 
  DangerZoneSection 
} from "../../components";

export default function SettingsPage() {
  const colorScheme = useColorScheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(colorScheme === 'dark');
  const [locationEnabled, setLocationEnabled] = useState(false);
  
  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900" edges={['bottom']}>
      <ScrollView className="flex-1">
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
    </SafeAreaView>
  );
} 