import SuggestedSpotifyTracks from '../suggested__spotify__tracks/SuggestedSpotifyTracks'
import { spotifySearch } from '../../lib/server__acctions'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import SuggestedSpotifyAlbums from '../suggested__spotify__albums/SuggestedSpotifyAlbums'
import SuggestedSpotifyArtistsProfile from '../suggested__spotify-artists-profile/SuggestedSpotifyArtistsProfile'
import { CircularProgress } from '@nextui-org/react'

export default function SuggestedSpotify({ input }) {
  const [response, setResponse] = useState(null)

  const [debounceInput] = useDebounce(input, 100)

  useEffect(() => {
    const getSpotifySearch = async () => {
      const response = await spotifySearch(input)
      setResponse(response)
    }

    getSpotifySearch()
  }, [debounceInput])

  return (
    <div className="w-full h-fit">
      <div>
        <h3 className="font-semibold text-xl mlz-1">Spotify</h3>
        {response ? (
          <>
            <p className="sticky text-xl font-semibold">Tracks</p>
            <div>
              <SuggestedSpotifyTracks
                response={response}
              ></SuggestedSpotifyTracks>
            </div>
            <p className="text-xl mt-2 font-semibold">Albums</p>
            <div>
              <SuggestedSpotifyAlbums response={response} />
            </div>
            <p className="text-xl mt-2 font-semibold">Artists</p>
            <div>
              <SuggestedSpotifyArtistsProfile response={response} />
            </div>
          </>
        ) : (
          <CircularProgress color="success" label="Loading..." size="lg" />
        )}
      </div>
    </div>
  )
}
