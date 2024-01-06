'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { keysOfKeys } from '../../lib/constants'
import KeysSuggestion from '../keys__suggestion/KeysSuggestion'
import('./suggested.css')

//! arreglar bug espasios
//! arreglar los logos

export default function Suggested({ setInput, value, completeInput }) {
  const searchParams = useSearchParams()
  const input = searchParams.get('query')
  const key = searchParams.get('key')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (key?.startsWith('!')) {
      key
        ? setResults(keysOfKeys.filter((element) => element.includes(key)))
        : setResults(keysOfKeys)
    } else if (!key) {
      setResults(keysOfKeys)
    } else {
      setResults([])
    }
    if (input) {
      setResults([])
    }
  }, [value])

  return (
    <div
      className={`suggested__container ${
        completeInput.status
          ? 'suggested__container-active'
          : 'suggested__container-desactive'
      }`}
    >
      <KeysSuggestion
        completeInput={completeInput}
        results={results}
        setInput={setInput}
      />
    </div>
  )
}
