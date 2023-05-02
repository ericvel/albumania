import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from "@env";

type SpotifyAccessToken = {
  access_token: string;
  token_type: "Bearer";
  expires_in: 3600;
};

export async function getSession(): Promise<SpotifyAccessToken> {
  const response = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }
  );
  const data = await response.json();

  return data;
}
