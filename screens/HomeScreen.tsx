import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go to My Albums"
        // onPress={() => navigation.navigate("MyAlbums")}
      />
    </View>
  );
}
