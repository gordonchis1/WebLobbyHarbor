import { useRef } from 'react'

export default function SearchInput({ setInput, completeInput }) {
  const inputRef = useRef()

  const handleSearch = (event) => {
    const value = event.target.value
    const arraySinEspacios = value.split(' ')
    const cleanSearch = arraySinEspacios[0].startsWith('!')
      ? arraySinEspacios.slice(1).join(' ')
      : arraySinEspacios.join(' ')

    const initKey = arraySinEspacios.filter((elemento) => elemento !== '')
    setInput({
      ...completeInput,
      input: value,
      key: initKey[0],
      query: cleanSearch
    })

    if (completeInput.status && inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <input
      ref={inputRef}
      onFocus={() => setInput({ ...completeInput, status: true })}
      className={`outline-none text-black rounded-r-[30px] duration-300 ease-[cubic-bezier(0.37, 0, 0.63, 1)] shadow-xl px-[20px] ${
        completeInput.status ? 'w-[100%]' : 'w-[30vw]'
      }`}
      type="text"
      placeholder="Search"
      onChange={(event) => handleSearch(event)}
      value={completeInput.input}
    ></input>
  )
}
