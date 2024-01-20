import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { keysOfKeys } from '../../lib/constants'
import('./searchinput.css')

//! arreglar el problema de la query que esta en el useEffect ya que esto podria afectar en el futuro

// ? ver si es viable dejar de usar la url para ahorrar codigo ya que tenemos un estado y las querys

export default function SearchInput({ setInput, completeInput, route }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const inputRef = useRef()

  useEffect(() => {
    route.push('/?')
  }, [])

  const handleSearch = (event) => {
    const value = event.target.value
    const params = new URLSearchParams(searchParams)
    const arraySinEspacios = value.split(' ')
    const cleanSearch = keysOfKeys.includes(arraySinEspacios[0])
      ? arraySinEspacios.slice(1).join(' ')
      : arraySinEspacios[0].startsWith('!')
        ? arraySinEspacios.slice(1).join(' ')
        : arraySinEspacios.join(' ')

    setInput({ ...completeInput, input: value })
    const initKey = arraySinEspacios.filter((elemento) => elemento !== '')

    if (initKey[0]) params.set('key', initKey[0])
    else params.delete('key')

    if (value) params.set('query', cleanSearch)
    else params.delete('query')

    route.replace(`${pathname}?${params.toString()}`)
    if (completeInput.status && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <input
      ref={inputRef}
      onFocus={() => setInput({ ...completeInput, status: true })}
      className={
        completeInput.status
          ? 'form__input-search form__input-search-active'
          : 'form__input-search form__input-search-inactive'
      }
      type="text"
      placeholder="Search"
      onChange={(event) => handleSearch(event)}
      value={completeInput.input}
    ></input>
  )
}
