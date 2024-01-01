'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { KEYS } from '../../lib/constants'
import SearchInput from '../search__input/SearchInput'
import SearchLogo from '../search__logo/SearchLogo'
import('./formsearch.css')

// !arreglar el codigo en las condiciones al enviar
// !componetizar
// !validar las props
// !optimizar el useEffect

export default function FormSearch ({ setInput, value, completeInput }) {
  const searchParams = useSearchParams()
  const route = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = `${KEYS[searchParams.get('key')?.toString()] ? KEYS[searchParams.get('key')?.toString()]?.route : KEYS['!g'].route}${searchParams.get('query')?.toString()}`

    route.push(value)
  }

  return (
        <form onSubmit={handleSubmit} className='flex z-10'>
          <SearchLogo searchParams={searchParams}/>
          <SearchInput completeInput={completeInput} setInput={setInput} searchParams={searchParams} route={route}/>
        </form>
  )
}
