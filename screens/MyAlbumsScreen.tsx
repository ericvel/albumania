import React from "react";
import { StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../api/albums";
import AlbumCard from "../components/AlbumCard/AlbumCard";
import Text from "../components/Text/Text";

type Props = {};

export default function MyAlbumsScreen({}: Props) {
  const {
    data: albums,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });
  console.log(albums);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Albumania</Text> */}

      {error ? (
        <Text>
          Error: {error instanceof Error ? error.message : "unknown error"}
        </Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.albumCardContainer}>
          {albums?.map((album: SpotifyApi.AlbumObjectSimplified) => (
            <AlbumCard album={album} />
          ))}
        </View>
      )}
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
  albumCardContainer: {
    flex: 1,
    gap: 16
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16
  },
});
