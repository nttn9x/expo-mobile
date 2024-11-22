import { fireEvent, render } from "@testing-library/react-native";

import CameraComponent from "@/components/atoms/camera";
import { act } from "react";

jest.mock("expo-camera", () => {
  const actualNavigationModule = jest.requireActual("expo-camera");
  return {
    ...actualNavigationModule,
    useCameraPermissions: () => {
      const requestPermission = () => {
        console.log("request permission called");
        return Promise.resolve({ status: "granted" });
      };

      const permission = { granted: true }; // set the value you want
      return [permission, requestPermission];
    },
  };
});

describe("<CameraComponent />", () => {
  // test("Text renders correctly on HomeScreen", () => {
  //   const { getByText } = render(<CameraComponent />);

  //   getByText("Welcome!");
  // });

  test("Show message warning when Camera permissions are not granted yet", () => {
    const { getByText, getByTestId } = render(<CameraComponent />);

    act(() => {
      // getByText("We need your permission to show the camera");
    });
    fireEvent.press(getByTestId("capture-btn"));
  });
});
 