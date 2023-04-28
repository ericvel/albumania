import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../api/albums";
import AlbumCard from "../components/AlbumCard/AlbumCard";

type Props = {};

export default function MyAlbumsScreen({}: Props) {
  const { data: albums } = useQuery({
    queryKey: ["albums"],
    queryFn:  getAlbums,
  });
  console.log(albums);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.heading}>Albumania</Text>
        {albums?.map((album) => (
          <AlbumCard album={album} />
        ))}
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
