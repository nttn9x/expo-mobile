import { Gutter } from "@/constants/Gutter";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  CameraPictureOptions,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRef } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CameraProps {
  previewURI?: string;
  onThumbnailPress?: () => void;
  cameraPictureOptions?: CameraPictureOptions;
}

export default function Camera({
  previewURI,
  onThumbnailPress,
  cameraPictureOptions,
}: CameraProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const theme = useThemeColor();
  const ref = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View data-testid="message-warning" style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function _onTakePictureAsync() {
    console.log('ref.current', ref.current);
    await ref.current?.takePictureAsync(cameraPictureOptions);
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background.body }]}
    >
      <CameraView style={styles.camera} facing={"back"} ref={ref}></CameraView>
      <View style={styles.footer}>
        <View style={styles.thumbnail}>
          {previewURI && (
            <TouchableOpacity
              onPress={onThumbnailPress}
              style={styles.thumbnailBody}
            >
              <Image
                style={styles.thumbnailBody}
                source={{
                  uri: previewURI,
                }}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            testID="capture-btn"
            style={styles.buttonBody}
            onPress={_onTakePictureAsync}
          ></TouchableOpacity>
        </View>
        <View style={styles.thumbnail}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: Gutter.component,
  },
  message: {
    textAlign: "center",
    paddingBottom: Gutter.component,
  },
  camera: {
    flex: 1,
  },
  footer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    flexDirection: "row",
  },
  thumbnail: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: Gutter.container,
  },
  thumbnailBody: { width: 60, height: 60 },
  button: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBody: {
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
