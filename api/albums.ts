import { getSession } from "../hooks/session";

export async function getAlbums() {
  const session = await getSession();
  const response = await fetch(
    "https://api.spotify.com/v1/albums/382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );


  return await response.json();
}
