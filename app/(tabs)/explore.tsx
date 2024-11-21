import { StyleSheet, Text, View } from "react-native";

export default function TestCamera() {
  return (
    <View>
      <Text>TestCamera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
