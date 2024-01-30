'use client'
import { useState } from 'react'
import ScreenCover from '../screen__cover/ScreenCover'
import dynamic from 'next/dynamic'

const FormSearch = dynamic(() => import('../form__search/FormSearch'))

export default function Search() {
  const [input, setInput] = useState({
    status: false,
    key: '',
    input: '',
    query: ''
  })

  return (
    <>
      <ScreenCover setInput={setInput} completeInput={input} />
      <div className="absolute flex w-[85%] max-w-[1800px] top-0 flex-col box-border items-center left-[50vw] -translate-y-[50%] -translate-x-[50%] z-40">
        <FormSearch
          setInput={setInput}
          value={input.input}
          completeInput={input}
        />
      </div>
    </>
  )
}
