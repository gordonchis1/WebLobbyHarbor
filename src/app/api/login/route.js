import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'
import { URL } from 'url'

const { NEXT_PUBLIC_CLIENT_ID_SPOTIFY, NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY } =
  process.env

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
        // redirect_uri: 'https://loading-bay.vercel.app/api/login',
        redirect_uri: 'http://localhost:3000/api/login',
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

    // const token = cookies()?.get('__session').value

    // if (token) {
    //   console.log(responseSpotify.data.refresh_token.toString(), 'flkasdj')
    //   const publicKey = process.env.CLERCK_JWT_SECRET
    //   try {
    //     const decoded = await jwt.verify(token, publicKey)
    //     console.log(decoded.sub)
    //     dbConnect()
    //     const user = await User.findOne({ userId: decoded.sub })
    //     const connectionSpotify = new Connections({
    //       spotify: responseSpotify.data.refresh_token
    //     })
    //     const connectionSaved = await connectionSpotify.save()

    //     user.connections = user.connections.concat(connectionSaved._id)

    //     await user.save()
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    return NextResponse.redirect('http://localhost:3000')

    // return NextResponse.redirect('https://loading-bay.vercel.app')
  } catch (error) {
    return NextResponse.json(error)
  }
}
