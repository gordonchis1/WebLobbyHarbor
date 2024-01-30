'use client'

import { Button, Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function NotesAddElement({ searchParams }) {
  const route = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault()
    route.replace(`?edit=${event.target[0].value}`)
  }

  return (
    <>
      {searchParams.newitem && (
        <>
          <div
            className="absolute w-screen h-screen bg-black z-50 bg-opacity-40 flex justify-center items-center"
            onClick={() => route.replace('/')}
          ></div>
          <div className="w-[40vw] h-auto bg-white m-auto rounded absolute z-[60] text-black p-5">
            <h3 className="font-bold text-xl">
              Add new {searchParams.newitem}
            </h3>
            <Divider className="mb-10"></Divider>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label className="font-semibold text-lg">Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="outline-none border-b-black border-b-2 mb-10 mx-2"
              ></input>
              <Button variant="shadow" color="primary" type="submit">
                Add
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  )
}
