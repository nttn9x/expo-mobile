import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function TestCameraScreen() {
  const { previewURIs } = useLocalSearchParams();
  const [photos, setPhotos] = useState(() => {
    try {
      return JSON.parse(previewURIs as string);
    } catch (error) {
      return [];
    }
  });

  const onRemove = (index: number) => {
    const photosNew = [...photos];
    photosNew.splice(index, 1);

    setPhotos(photosNew);
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={photos}
        renderItem={({ item, index }) => {
          return (
            <View style={{ ...styles.thumbnail, flex: 0.5 }}>
              <Image
                style={styles.thumbnailBody}
                source={{
                  uri: item,
                }}
              />
              <TouchableHighlight
                onPress={() => onRemove(index)}
                style={styles.removeContainer}
              >
                <View style={styles.removeButton}>
                  <Text>X</Text>
                </View>
              </TouchableHighlight>
            </View>
          );
        }}
        keyExtractor={(item, index) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  thumbnail: { backgroundColor: "#ddd", height: 130 },
  thumbnailBody: { flex: 1, position: "relative" },
  removeContainer: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 10,
    top: 10,
  },
  removeButton: {
    opacity: 0.3,
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
