import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="test-camera" />
      <Stack.Screen name="test-video" />
    </Stack>
  );
}
