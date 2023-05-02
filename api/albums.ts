import { getSession } from "../hooks/session";

export async function getAlbums(): Promise<SpotifyApi.AlbumObjectSimplified[]> {
  const session = await getSession();
  const response = await fetch(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  if (!response.ok) {
    const data = await response.json();
    const error = new Error(data.error.message);
    throw error;
  }

  const { albums } = await response.json();
  return albums;
}
