import googleLogo from '../../../public/google_logo.png'
import youtubeLogo from '../../../public/youtube_logo.png'
import youLogo from '../../../public/you-logo.png'
import tiktokLogo from '../../../public/tiktok_logo.png'
import bingLogo from '../../../public/bing_logo.png'
import spotifyLogo from '../../../public/Spotify_logo.png'
//! arreglar las importaciones con el @

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
