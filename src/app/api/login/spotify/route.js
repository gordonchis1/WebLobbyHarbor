import { NextResponse } from 'next/server'
import { stringify } from 'querystring'
// import axios from 'axios'
// import { parse, serialize } from 'cookie'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY
const redirect = 'http://localhost:3000/api/login/'

export async function GET(req) {
  const scope = 'user-read-private user-read-email'

  return NextResponse.redirect(
    'https://accounts.spotify.com/authorize?' +
      stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope,
        redirect_uri: redirect
      })
  )
}

// export async function POST(request, res) {
//   const head = await request.json()
//   const { code } = head

//   const CLIENT_SECRET_SPOTIFY = process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY

//   try {
//     const responseSpotify = await axios.post(
//       'https://accounts.spotify.com/api/token',
//       {
//         code,
//         redirect_uri: 'http://localhost:3000/',
//         grant_type: 'authorization_code'
//       },
//       {
//         headers: {
//           'content-type': 'application/x-www-form-urlencoded',
//           Authorization: `Basic ${btoa(
//             `${CLIENT_ID}:${CLIENT_SECRET_SPOTIFY}`
//           )}`
//         },
//         json: true
//       }
//     )

//     res.setHeader(
//       'Set-Cookie',
//       serialize('spotifyAccessToken', JSON.stringify(responseSpotify), {
//         path: '/', // ajusta esto según tus necesidades
//         httpOnly: false // asegura que la cookie solo sea accesible por el servidor
//       })
//     )

//     return res.json('Log good')
//   } catch (error) {
//     return NextResponse.json(error)
//   }
// }
