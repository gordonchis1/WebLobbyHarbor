import { NextResponse } from 'next/server'
import { stringify } from 'querystring'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY
const NODE_ENV = process.env.NODE_ENV

export async function GET(request, { params }) {
  if (params.service === 'spotify') {
    const scope = 'user-read-private user-read-email'

    return NextResponse.redirect(
      'https://accounts.spotify.com/authorize?' +
        stringify({
          response_type: 'code',
          client_id: CLIENT_ID,
          scope,
          redirect_uri:
            NODE_ENV === 'development'
              ? 'http://localhost:3000/api/login/callback/spotify'
              : 'https://loading-bay.vercel.app/api/login/callback/spotify'
        })
    )
  }
}
