'use client'
import { useEffect, useState } from 'react'
import { keysOfKeys } from '../../lib/constants'
import KeysSuggestion from '../keys__suggestion/KeysSuggestion'
import SuggestedSpotify from '../suggested__spotify/SuggestedSpotify'

//! arreglar bug espasios
//! arreglar los logos
//! arregalr bug de key
//! cambiar la condicional de spotify por un objeto con condicion y componente

export default function Suggested({ setInput, value, completeInput }) {
  const [results, setResults] = useState(keysOfKeys)
  const key = completeInput?.key
  const query = completeInput?.query

  useEffect(() => {
    if (key?.startsWith('!')) {
      key
        ? setResults(keysOfKeys.filter((element) => element.includes(key)))
        : setResults(keysOfKeys)
    } else if (!key) {
      setResults(keysOfKeys)
    }
    if (query) {
      setResults([])
    }
  }, [value, key, query])

  return (
    <div
      className={`w-[98%] bg-blur-bg h-auto rounded-b-[4px] text-black py-[15px] px-[10px] relative -top[2px] flex flex-col items-center justify-center duration-300 ${
        !completeInput.status
          ? '-translate-y-[50%] opacity-0 hidden'
          : 'translate-y-0 top-0 opacity-1'
      } `}
    >
      <KeysSuggestion
        completeInput={completeInput}
        results={results}
        setInput={setInput}
      />
      {key === '!s' ? <SuggestedSpotify input={query}></SuggestedSpotify> : ''}
    </div>
  )
}
