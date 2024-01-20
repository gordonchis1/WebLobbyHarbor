'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { keysOfKeys } from '../../lib/constants'
import KeysSuggestion from '../keys__suggestion/KeysSuggestion'
import SuggestedSpotify from '../suggested__spotify/SuggestedSpotify'
import('./suggested.css')

//! arreglar bug espasios
//! arreglar los logos
//! arregalr bug de key
//! cambiar la condicional de spotify por un objeto con condicion y componente

export default function Suggested({ setInput, value, completeInput }) {
  const searchParams = useSearchParams()
  const input = searchParams.get('query')
  const key = searchParams.get('key')
  const [results, setResults] = useState(keysOfKeys)

  useEffect(() => {
    if (key?.startsWith('!')) {
      key
        ? setResults(keysOfKeys.filter((element) => element.includes(key)))
        : setResults(keysOfKeys)
    } else if (!key) {
      setResults(keysOfKeys)
    }
    if (input) {
      setResults([])
    }
  }, [value, key, input])

  return (
    <div
      className={`suggested__container-desactive ${
        completeInput.status ? 'suggested__container' : ''
      }`}
    >
      <KeysSuggestion
        completeInput={completeInput}
        results={results}
        setInput={setInput}
      />
      {key === '!s' ? <SuggestedSpotify input={input}></SuggestedSpotify> : ''}
    </div>
  )
}
