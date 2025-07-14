import React from "react";
import { Text, View } from "react-native";
import { ProfileSectionItem } from './ProfileSectionItem';

export function ProfileSections() {
  const sections = [
    { title: 'Edit Profile', icon: 'create-outline' as const, color: '#3b82f6' },
    { title: 'My Activities', icon: 'analytics-outline' as const, color: '#8b5cf6' },
    { title: 'Notifications', icon: 'notifications-outline' as const, color: '#f59e0b' },
    { title: 'Privacy & Security', icon: 'shield-checkmark-outline' as const, color: '#10b981' },
    { title: 'Help & Support', icon: 'help-circle-outline' as const, color: '#f97316' },
    { title: 'About', icon: 'information-circle-outline' as const, color: '#6b7280' },
  ];

  return (
    <View className="px-6 py-4">
      <Text
        className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
        style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
      >
        Quick Actions
      </Text>
      
      <View className="space-y-3">
        {sections.map((section, index) => (
          <ProfileSectionItem
            key={index}
            title={section.title}
            icon={section.icon}
            color={section.color}
          />
        ))}
      </View>
      
      {/* Bio Section */}
      <View className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <Text
          className="text-base font-semibold text-gray-900 dark:text-white mb-2"
          style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
        >
          About Me
        </Text>
        <Text
          className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Passionate software developer with 5+ years of experience in mobile and web development. 
          Love building user-friendly applications that make a difference in people's lives.
        </Text>
      </View>
    </View>
  );
} 