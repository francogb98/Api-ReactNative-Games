import React from "react";
import { View } from "react-native";

function Screen({ children }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        paddingTop: 15,
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
}

export default Screen;
