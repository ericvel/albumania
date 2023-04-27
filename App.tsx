import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AlbumCard from "./components/AlbumCard/AlbumCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.heading}>Albumania</Text>
        {/* <AlbumCard /> */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#065f46",
    alignItems: "center",
    paddingTop: 52,
  },
  text: {
    color: "#fff",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
