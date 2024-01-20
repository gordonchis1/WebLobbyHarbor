'use client'
import { Suspense, useState } from 'react'
import FormSearch from '../form__search/FormSearch'
import Suggested from '../suggested/suggested'
import ScreenCover from '../screen__cover/ScreenCover'
import('./search.css')

export default function Search() {
  const [input, setInput] = useState({
    status: false,
    input: ''
  })

  return (
    <>
      <ScreenCover setInput={setInput} completeInput={input} />
      <div className="search-wpp">
        <FormSearch
          setInput={setInput}
          value={input.input}
          completeInput={input}
        />
        <Suspense fallback={<p>loading</p>}>
          <Suggested
            setInput={setInput}
            value={input.input}
            completeInput={input}
          />
        </Suspense>
      </div>
    </>
  )
}
