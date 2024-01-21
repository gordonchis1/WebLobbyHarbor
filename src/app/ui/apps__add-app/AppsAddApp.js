'use client'

import { Card } from '@nextui-org/react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import AppsFormAdd from '../apps__from-add/AppsFormAdd'

export default function AppsAddApp() {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState({
    url: null,
    nameFromUrl: null,
    name: null
  })

  return (
    <>
      <Card
        isPressable
        onPress={() => {
          setIsActive(!isActive)
          setValue({ url: null, nameFromUrl: null, name: null })
        }}
        className="border-none px-5 flex flex-col justify-center items-center bg-blur-bg cursor-pointer h-auto mt-2"
      >
        <FontAwesomeIcon icon={faAdd} className="text-3xl" />
        <p className="font-semibold text-black ">Add</p>
      </Card>

      {isActive && (
        <AppsFormAdd
          setIsActive={setIsActive}
          value={value}
          setValue={setValue}
          isActive={isActive}
        />
      )}
    </>
  )
}
