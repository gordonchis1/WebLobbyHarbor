import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { keysOfKeys } from '../../lib/constants'
import('./searchinput.css')

export default function SearchInput({
  setInput,
  completeInput,
  searchParams,
  route
}) {
  const pathname = usePathname()
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const arraySinEspacios = completeInput.input.split(' ')
    const cleanSearch = keysOfKeys.includes(arraySinEspacios[0])
      ? arraySinEspacios.slice(1).join(' ')
      : arraySinEspacios[0].startsWith('!')
        ? arraySinEspacios.slice(1).join(' ')
        : arraySinEspacios.join(' ')

    const initKey = arraySinEspacios.filter((elemento) => elemento !== '')

    if (initKey[0]) params.set('key', initKey[0])
    else params.delete('key')

    if (completeInput.input) params.set('query', cleanSearch)
    else params.delete('query')

    route.replace(`${pathname}?${params.toString()}`)
    if (completeInput.status && inputRef.current) {
      inputRef.current.focus()
    }
  }, [completeInput.input, completeInput.status])

  const handleSearch = (event) => {
    setInput({
      ...completeInput,
      input: event.target.value
    })
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
      defaultValue={searchParams.get('query')?.toString()}
      value={completeInput.input}
    ></input>
  )
}
