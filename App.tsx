// Global Imports
import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

// Local Imports
import CustomSlider from "./components/custom-slider";

// Main App Component
const App: React.FC = () => {
  // State for slider value
  const [sliderValue, setSliderValue] = useState(0);

  // Func to render cat picture based on slider value
  const renderCatPicture = () => {
    switch (sliderValue) {
      case 0:
        return (
          <Image
            source={require("./assets/images/sad-cat.png")}
            style={styles.catImage}
          />
        );
      case 5:
        return (
          <Image
            source={require("./assets/images/sigma-cat.png")}
            style={styles.catImage}
          />
        );
      case 10:
        return (
          <Image
            source={require("./assets/images/overjoyed-cat.png")}
            style={styles.catImage}
          />
        );
      default:
        return (
          <Image
            source={require("./assets/images/sad-cat.png")}
            style={styles.catImage}
          />
        );
    }
  };

  // Main App Render
  return (
    <View style={styles.appView}>
      <Text style={styles.signatureText}>made with ❤️ by bryantpdev</Text>
      {renderCatPicture()}
      <CustomSlider onValueChange={setSliderValue} />
      <Text style={styles.counterText}>Current Value = {sliderValue}</Text>
    </View>
  );
};
export default App;

// App Stylesheet
const styles = StyleSheet.create({
  appView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202225",
    marginBottom: 0,
  },

  counterText: {
    color: "#5865f2",
    fontSize: 35,
    marginTop: 40,
    fontFamily: "JetbrainsMono",
    fontWeight: "600",
  },

  catImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 10,
  },

  signatureText: {
    color: "#5865f2",
    fontFamily: "JetbrainsMono",
    textAlign: "center",
    fontSize: 12,
  },
});
