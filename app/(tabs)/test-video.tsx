import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TestCameraScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function onRecordAsync() {
    setIsRecording(true);
    const video = await ref.current?.recordAsync();
    Alert.alert("Uri", video?.uri);
  }

  async function onStopRecording() {
    setIsRecording(false);
    await ref.current?.stopRecording();
  }

  return (
    <View style={styles.container}>
      <CameraView mode="video" style={styles.camera} facing={"back"} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={isRecording ? onStopRecording : onRecordAsync}
          >
            <Text style={styles.text}>{isRecording ? "Stop" : "Record"}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
