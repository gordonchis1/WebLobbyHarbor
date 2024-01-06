import googleLogo from '../../../public/google_logo.webp'
import youtubeLogo from '../../../public/youtube_logo.webp'
import youLogo from '../../../public/you-logo.webp'
import tiktokLogo from '../../../public/tiktok_logo.webp'
import bingLogo from '../../../public/bing_logo.webp'
import spotifyLogo from '../../../public/Spotify_logo.webp'

export const KEYS = {
  '!g': {
    route: 'https://www.google.com.mx/search?q=',
    defaultRoute: 'https://www.google.com',
    img: googleLogo
  },
  '!y': {
    route: 'https://www.youtube.com/results?search_query=',
    defaultRoute: 'https://www.youtube.com/',
    img: youtubeLogo
  },
  '!you': {
    route: 'https://you.com/search?q=',
    defaultRoute: 'https://you.com',
    img: youLogo
  },
  '!t': {
    route: 'https://www.tiktok.com/search?q=',
    defaultRoute: 'https://www.tiktok.com',
    img: tiktokLogo
  },
  '!b': {
    route: 'https://www.bing.com/search?q=',
    defaultRoute: 'https://www.bing.com',
    img: bingLogo
  },
  '!s': {
    route: 'https://open.spotify.com/search/',
    defaultRoute: 'https://open.spotify.com',
    img: spotifyLogo
  }
}

export const keysOfKeys = Object.keys(KEYS)
