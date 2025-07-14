import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Content } from "../../components";

export default function HomePage() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900" edges={['bottom']}>
      <ScrollView className="flex-1">
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
} 