import { Button, StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Test Camera" onPress={() => router.push("/test-camera")} />
      <Button title="Test Video" onPress={() => router.push("/test-video")} />
      <Button title="Test Audio" onPress={() => router.push("/test-audio")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
});
