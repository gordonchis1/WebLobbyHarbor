'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { KEYS, keysOfKeys } from '../../lib/constants'
import('./suggested.css')

//! arreglar bug espasios
//! arreglar los logos

export default function Suggested ({ setInput, value, completeInput }) {
  const searchParams = useSearchParams()
  const input = searchParams.get('query')
  const key = searchParams.get('key')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (key?.startsWith('!')) {
      key ? setResults(keysOfKeys.filter(element => element.includes(key))) : setResults(keysOfKeys)
    } else if (!key) {
      setResults(keysOfKeys)
    } else {
      setResults([])
    }
    if (input) {
      setResults([])
    }
  }, [value])

  const handleClick = (element) => (event) => {
    event.preventDefault()
    setInput({ ...completeInput, input: element + ' ' })
  }

  return (
    <div className={`suggested__container ${completeInput.status ? 'suggested__container-active' : 'suggested__container-desactive'}`}>
      {results.map(element => {
        return (
          <li key={element} className='suggested__result-container' style={{ width: '100%', height: '100%' }}>
            <button className={'suggested__result-btn'} onClick={handleClick(element)}>
                <img src={ KEYS[element].img.src} className="suggested__img-logo"></img>
                <p>{element}</p>
            </button>
          </li>
        )
      })}
    </div>
  )
}
