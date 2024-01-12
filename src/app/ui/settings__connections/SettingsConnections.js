import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { useState } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

//! componetizar
export default function SettingsConnections() {
  const [isConnected, setIsConected] = useState(Cookie.get('_spotify'))
  console.log(isConnected)

  return (
    <div className="text-black mt-5 flex flex-col w-full">
      <h3 className="font-bold text-lg">Conexiones</h3>
      {!isConnected ? (
        <Link
          href={'/api/login/spotify'}
          className="p-5 bg-green-600 rounded justify-between w-full flex items-center"
        >
          <p>Spotify</p>
          <FontAwesomeIcon icon={faSpotify} className="text-2xl" />
        </Link>
      ) : (
        <div className="p-4 bg-green-600 rounded justify-between w-full flex items-center">
          <p>Spotify</p>
          <button
            className="p-2 rounded bg-blur-bg hover:bg-red duration-300"
            onClick={() => {
              Cookie.remove('_spotify')
              setIsConected(false)
            }}
          >
            Connected <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      )}
    </div>
  )
}
