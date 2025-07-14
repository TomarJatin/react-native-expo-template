import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { FeatureCard } from "./FeatureCard";

export function Content() {
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl text-center native:text-5xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Welcome to Project ACME
            </Text>
            <Text 
              className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400"
              style={{ fontFamily: "PlusJakartaSans_400Regular" }}
            >
              Discover and collaborate on acme. Explore our services now.
            </Text>

            <View className="gap-4 mt-6">
              <Link
                suppressHighlighting
                className="flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-6 py-3 text-sm text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/profile"
              >
                <Text style={{ fontFamily: "PlusJakartaSans_500Medium" }} className="text-gray-50 dark:text-gray-900">
                  Explore Profile
                </Text>
              </Link>
              
              <Link
                suppressHighlighting
                className="flex h-12 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm text-gray-900 web:shadow-sm ios:shadow transition-colors hover:bg-gray-50 active:bg-gray-100 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
                href="/settings"
              >
                <Text style={{ fontFamily: "PlusJakartaSans_500Medium" }} className="text-gray-900 dark:text-gray-50">
                  View Settings
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </View>

      {/* Features Section */}
      <View className="py-12 bg-gray-50 dark:bg-gray-800">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-8">
            <Text
              className="text-2xl text-center tracking-tighter sm:text-3xl text-gray-900 dark:text-white"
              style={{ fontFamily: "PlusJakartaSans_600SemiBold" }}
            >
              Key Features
            </Text>
            
            <View className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
              <FeatureCard
                title="Fast & Reliable"
                description="Built with performance in mind using the latest React Native and Expo technologies."
                icon="⚡"
              />
              <FeatureCard
                title="Beautiful Design"
                description="Modern UI with dark mode support and responsive design principles."
                icon="🎨"
              />
              <FeatureCard
                title="Cross Platform"
                description="Works seamlessly on iOS, Android, and Web with a single codebase."
                icon="📱"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
} 