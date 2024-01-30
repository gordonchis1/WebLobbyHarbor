'use client'
import { useRouter } from 'next/navigation'
import { KEYS } from '../../lib/constants'
import SearchInput from '../search__input/SearchInput'
import SearchLogo from '../search__logo/SearchLogo'
import { Suspense } from 'react'
import Suggested from '../suggested/suggested'

// !arreglar el codigo en las condiciones al enviar
// !validar las props

export default function FormSearch({ setInput, completeInput }) {
  const route = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    const filter = KEYS[completeInput.key]

    const value = `${
      filter ? KEYS[completeInput.key]?.route : KEYS['!g'].route
    }${completeInput.query}`
    route.push(value)
  }

  return (
    <div className="flex flex-col w-full absolute justify-center items-center mt-5">
      <form onSubmit={handleSubmit} className="flex z-10 w-full justify-center">
        <SearchLogo completeInput={completeInput} />
        <SearchInput completeInput={completeInput} setInput={setInput} />
      </form>
      <Suspense fallback={<p>loading</p>}>
        <Suggested
          setInput={setInput}
          value={completeInput.input}
          completeInput={completeInput}
        />
      </Suspense>
    </div>
  )
}
