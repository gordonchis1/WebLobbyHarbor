/* eslint-disable camelcase */
'use server'
import { cookies } from 'next/headers'
import { dbConnect } from '../../db/db'
import User from '../../db/models/User'
import axios from 'axios'

// ! refactorizar el codigo de el refresh del token

export const getAllUsers = async () => {
  dbConnect()
  const users = await User.find()
  return users
}

export async function spotifySearch(value) {
  const cookie = cookies().get('_spotify').value

  const { access_token, refresh_token } = JSON.parse(cookie)

  const spotifySearch = async (token) => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${
        value || 'a'
      }&type=album%2Ctrack%2Cartist`,
      { headers: { Authorization: 'Bearer ' + token } }
    )

    return await response.data
  }

  try {
    const response = await spotifySearch(access_token)
    return response
  } catch (error) {
    if (error) {
      try {
        const refreshedToken = await axios.post(
          'https://accounts.spotify.com/api/token',
          {
            grant_type: 'refresh_token',
            refresh_token
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(
                `${process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY}:${process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY}`
              )}`
            }
          }
        )

        const refreshResponse = await refreshedToken.value
        if (refreshResponse) {
          cookies().set('_spotify', JSON.stringify(refreshResponse))
        }

        return await spotifySearch(refreshedToken.data.access_token)
      } catch (error) {
        console.log(error.data, 'kfjladsñk')
      }
    }
  }
}
