type SpotifyAccessToken = {
  access_token: string;
  token_type: "Bearer";
  expires_in: 3600;
};

export async function getSession() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  const data: SpotifyAccessToken = await response.json();

  return data;
}
