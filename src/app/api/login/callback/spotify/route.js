import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'
import { URL } from 'url'

const {
  NEXT_PUBLIC_CLIENT_ID_SPOTIFY,
  NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY,
  NODE_ENV
} = process.env

export async function GET(req, res) {
  const url = new URL(req.url)
  const code = url.searchParams.get('code')

  if (!code || cookies().has('_spotify')) {
    return NextResponse.json({ error: 'You need a valid spotify code' })
  }

  try {
    const responseSpotify = await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        code,
        redirect_uri:
          NODE_ENV === 'development'
            ? 'http://localhost:3000/api/login/callback/spotify'
            : 'https://loading-bay.vercel.app/api/login/callback/spotify',
        grant_type: 'authorization_code'
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(
            `${NEXT_PUBLIC_CLIENT_ID_SPOTIFY}:${NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY}`
          )}`
        },
        json: true
      }
    )

    cookies().set('_spotify', JSON.stringify(responseSpotify.data), {
      httpOnly: false,
      path: '/',
      secure: false,
      sameSite: false
    })

    if (NODE_ENV === 'development') {
      return NextResponse.redirect('http://localhost:3000')
    } else {
      return NextResponse.redirect('https://loading-bay.vercel.app')
    }
  } catch (error) {
    return NextResponse.json(error)
  }
}
