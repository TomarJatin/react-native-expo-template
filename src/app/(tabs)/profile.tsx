import React from "react";
import { Text, View, ScrollView, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export default function ProfilePage() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <ProfileHeader />
      <ProfileStats />
      <ProfileSections />
    </ScrollView>
  );
}

function ProfileHeader() {
  return (
    <View className="px-6 py-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
      <View className="flex flex-col items-center">
        {/* Profile Picture */}
        <View className="relative mb-4">
          <View className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
            <Ionicons name="person" size={40} color="#6b7280" />
          </View>
          <Pressable className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Ionicons name="camera" size={16} color="white" />
          </Pressable>
        </View>
        
        {/* User Info */}
        <Text
          className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1"
          style={{ fontFamily: "PlusJakartaSans_700Bold" }}
        >
          John Doe
        </Text>
        <Text
          className="text-base text-center text-gray-600 dark:text-gray-300 mb-2"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          Software Developer
        </Text>
        <Text
          className="text-sm text-center text-gray-500 dark:text-gray-400"
          style={{ fontFamily: "PlusJakartaSans_400Regular" }}
        >
          📍 San Francisco, CA
        </Text>
      </View>
    </View>
  );
}

function ProfileStats() {
  const stats = [
    { label: 'Projects', value: '12', icon: 'folder' as const },
    { label: 'Followers', value: '1.2K', icon: 'people' as const },
    { label: 'Following', value: '324', icon: 'person-add' as const },
  ];

  return (
    <View className="px-6 py-6 bg-white dark:bg-gray-900">
      <View className="flex flex-row justify-around">
        {stats.map((stat, index) => (
          <View key={index} className="flex flex-col items-center">
            <View className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
              <Ionicons name={stat.icon} size={20} color="#3b82f6" />
            </View>
            <Text
              className="text-xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              {stat.value}
            </Text>
            <Text
              className="text-sm text-gray-600 dark:text-gray-300"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              {stat.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function ProfileSections() {
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

interface ProfileSectionItemProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

function ProfileSectionItem({ title, icon, color }: ProfileSectionItemProps) {
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