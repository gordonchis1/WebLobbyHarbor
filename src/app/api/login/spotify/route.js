import { NextResponse } from 'next/server'
import { stringify } from 'querystring'
// import axios from 'axios'
// import { parse, serialize } from 'cookie'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY
const redirect = 'https://loading-bay.vercel.app/api/login'

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
