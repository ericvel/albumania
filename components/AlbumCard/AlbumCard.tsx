import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Text from "../Text/Text";

type Props = {
  album: SpotifyApi.AlbumObjectSimplified;
};

const ArtistText = ({
  artists,
}: {
  artists: SpotifyApi.ArtistObjectSimplified[];
}) => (
  <Text>
    {artists.map((artist) => (
      <>{artist.name}</>
    ))}
  </Text>
);

function AlbumCard({ album }: Props) {
  return (
    <View style={styles.albumCard}>
      <Image
        style={styles.image}
        source={{
          uri: album.images[2].url,
        }}
      />
      <View style={styles.text}>
        <Text style={styles.nameText}>{album.name}</Text>
        <ArtistText artists={album.artists} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  albumCard: {
    flexDirection: "row",
    verticalAlign: "middle",
    width: 400,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#fff",
    padding: 16,
    gap: 16,
    borderRadius: 8,
    backgroundColor: "#262626",
  },
  text: {
    justifyContent: "center",
  },
  nameText: {
    fontWeight: "bold",
  },
  artistText: {},
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
});

export default AlbumCard;
