import React from "react";
import { Text as NativeText, TextProps, StyleSheet } from "react-native";

export default function Text({ style, ...props }: TextProps) {
  return <NativeText style={[styles.defaultStyle, style]} {...props} />;
}

const styles = StyleSheet.create({
  defaultStyle: {
    color: "#fff",
  },
});
