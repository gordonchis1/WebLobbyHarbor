import axios from 'axios'

export const authSpotify = async (code) => {
  const CLIENT_SECRET_SPOTIFY = process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY
  const CLIENT_ID_SPOTIFY = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        code,
        redirect_uri: 'http://localhost:3000/',
        grant_type: 'authorization_code'
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(
            `${CLIENT_ID_SPOTIFY}:${CLIENT_SECRET_SPOTIFY}`
          )}`
        },
        json: true
      }
    )

    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
