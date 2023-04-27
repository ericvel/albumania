import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  album: SpotifyApi.AlbumObjectSimplified;
};

const ArtistsText = ({
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
    <View>
      <Text>{album.name}</Text>
      <ArtistsText artists={album.artists} />
    </View>
  );
}

export default AlbumCard;
