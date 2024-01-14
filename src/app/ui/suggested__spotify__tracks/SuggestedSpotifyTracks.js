import SuggestedSpotifyArtists from '../suggested__spotify-artists/SuggestedSpotifyArtists'
import SuggestedSpotifyCover from '../suggested__spotify-cover/SuggestedSpotifyCover'

export default function SuggestedSpotifyTracks({ response }) {
  return (
    <div className="overflow-x-scroll h-min">
      {response?.tracks ? (
        <div className="flex min-w-full grow w-fit justify-between h-fit">
          {response?.tracks?.items?.map((element) => {
            return (
              <div
                key={element.id}
                className="flex flex-col w-full justify-center h-fit aspect-square min-w-40"
              >
                <SuggestedSpotifyCover
                  href={element.external_urls.spotify}
                  src={element.album.images[1].url}
                  title={element.name}
                />
                <div className={'max-h-10 flex flex-col truncate mb-2'}>
                  {element.artists?.map((element) => {
                    return (
                      <SuggestedSpotifyArtists
                        key={element.id}
                        name={element.name}
                        href={element.external_urls.spotify}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
