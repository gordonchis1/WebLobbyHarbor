import { NextResponse } from 'next/server'
import { stringify } from 'querystring'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY
const redirect = 'http://localhost:3000/'

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
