import Camera from "@/components/atoms/camera";
import { CameraPictureOptions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TestCameraScreen() {
  const [previewURIs, setPreviewURIs] = useState<string[]>([]);
  const router = useRouter();

  const cameraPictureOptions: CameraPictureOptions = {
    onPictureSaved(picture) {
      setPreviewURIs((preState) => [...preState, picture.uri]);
    },
  };

  const goToPhotoScreen = () => {
    router.push({
      pathname: `/(tabs)/test-camera-photos`,
      params: {
        previewURIs: JSON.stringify(previewURIs),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Camera
        previewURI={previewURIs[previewURIs.length - 1]}
        cameraPictureOptions={cameraPictureOptions}
        onThumbnailPress={goToPhotoScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
