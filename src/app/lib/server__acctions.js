/* eslint-disable camelcase */
'use server'
import { cookies } from 'next/headers'
import { dbConnect } from '../../db/db'
import User from '../../db/models/User'
import App from '../../db/models/apps'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { revalidatePath } from 'next/cache'
import Notes from '../../db/models/Notes'

// ! refactorizar el codigo de el refresh del token
//! hacer una funcion para recuperar el token y validarlo

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
        console.error(error.data)
      }
    }
  }
}

export const createApp = async (prevState, formData) => {
  dbConnect()
  const name = formData.get('name')
  const url = formData.get('url')
  const token = cookies().get('__session')?.value

  if (!url || !name || !token) {
    return {
      message: '',
      error: 'Specify a url and a name',
      state: false
    }
  }
  try {
    const decodded = jwt.verify(token, process.env.CLERCK_JWT_SECRET)
    const newApp = new App({
      name,
      url,
      user: decodded.sub
    })

    const saveApp = await newApp.save()

    try {
      const user = await User.findOne({ userId: decodded.sub })
      user.apps = user.apps.concat(saveApp._id)
      await user.save()
      revalidatePath('/')
      return {
        message: 'app created successfully ',
        error: undefined,
        state: true
      }
    } catch (error) {
      return {
        message: '',
        error: 'Error test later',
        state: false
      }
    }
  } catch (error) {
    return {
      message: '',
      error: 'Error test later',
      state: false
    }
  }
}

export const getUserApps = async () => {
  dbConnect()
  const token = cookies().get('__session')?.value

  if (!token) {
    return
  }

  try {
    const decodded = jwt.verify(token, process.env.CLERCK_JWT_SECRET)

    const app = await App.find({ user: decodded.sub })
    return { props: { apps: app }, revalidate: 0 }
  } catch (error) {
    console.error(error)
  }
}

export const deleteUserApps = async (id, userId) => {
  dbConnect()
  const token = cookies().get('__session')?.value

  if (!token) {
    return
  }

  try {
    const deleteApp = await App.findByIdAndDelete(id)
    const user = await User.findOne({ userId })
    user.apps = user.apps.filter((element) => element.toString() !== id)
    await user.save()
    revalidatePath('/')
    console.log(deleteApp)
  } catch (error) {
    console.error(error)
  }
}

export const getFotballResults = async (url) => {
  try {
    const getResults = await axios.get(url, {
      headers: { 'X-Auth-Token': '69fd5f85acd8417f9bfe982135c39c78' }
    })

    return getResults.data
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentWeather = async (lat, lon) => {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=815d9f78e6ca526120ae91149c2dde32&units=metric`
    )

    return weather.data
  } catch (error) {
    console.log(error)
  }
}

export const addNewNote = async (content, name, userId) => {
  'use server'
  dbConnect()
  try {
    const newNote = new Notes({
      name,
      content,
      path: '/',
      userId
    })
    const savedNote = await newNote.save()
    const user = await User.findOne({ userId })
    user.notes = user.notes.concat(savedNote._id)

    await user.save()
  } catch (error) {
    console.error(error)
  }
}
