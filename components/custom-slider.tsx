// Global Imports
import React from "react";
import {View, StyleSheet, Text} from "react-native";
import Slider from "@react-native-community/slider";

// Interfaces
interface CustomSliderProps {
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

// Create Component using the interface we created inside the React.FC
const CustomSlider: React.FC<CustomSliderProps> = ({
  minimumValue = 0,
  maximumValue = 10,
  step = 5,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        onValueChange={onValueChange}
        minimumTrackTintColor="#5865f2"
        maximumTrackTintColor="#23272a"
        thumbTintColor="#36393f"
      />
      <View style={styles.valueContainer}>
        <Text style={styles.logoHeader}>Kalogon Cat Slider</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#2c2f33",
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },

  slider: {
    width: 260,
    height: 80,
  },

  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  logoHeader: {
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "JetbrainsMono",
    fontWeight: "700",
  },
});

export default CustomSlider;
